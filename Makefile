# https://drewsilcock.co.uk/using-make-and-latexmk
# https://tex.stackexchange.com/questions/40738/how-to-properly-make-a-latex-project

LATEX=pdflatex
LATEXOPT=--shell-escape
NONSTOP=--interaction=nonstopmode

LATEXMK=latexmk
LATEXMKOPT=-pdf -use-make
CONTINUOUS=-pvc

MAIN=general_exam_jp
MARKDOWN_INPUTS := $(wildcard inputs/*.markdown)
SOURCES := $(wildcard inputs/*.tex)
#
# You want latexmk to *always* run, because make does not have all the info.
# Also, include non-file targets in .PHONY so they are run regardless of any
# file of the given name existing.
.PHONY: $(MAIN).pdf all clean print mdconvert

# The first rule in a Makefile is the one executed by default ("make"). It
# should always be the "all" rule, so that "make" and "make all" are identical.
all: $(MAIN).pdf

.refresh:
	touch .refresh

# CUSTOM BUILD RULES

# In case you didn't know, '$@' is a variable holding the name of the target,
# and '$<' is a variable holding the (first) dependency of a rule.
# "raw2tex" and "dat2tex" are just placeholders for whatever custom steps
# you might have.

print:
	echo $(SOURCES)

inputs/%.tex: inputs/%.markdown
	pandoc --filter=pandoc-citeproc -o $@ --biblatex $<

# MAIN LATEXMK RULE

# -pdf tells latexmk to generate PDF directly (instead of DVI).
# -pdflatex="" tells latexmk to call a specific backend with specific options.
# -use-make tells latexmk to call make for generating missing files.

# -interaction=nonstopmode keeps the pdflatex backend from stopping at a
# missing file reference and interactively asking you for an alternative.
#
# Note that %O is replaced by latexmk with the options given to latexmk, and %S is replaced with the source file name

$(MAIN).pdf: $(MAIN).tex .refresh $(SOURCES)
	$(LATEXMK) $(LATEXMKOPT) \
		-pdflatex="$(LATEX) $(LATEXOPT) $(NONSTOP) %O %S" $(MAIN)

clean:
	latexmk -C


