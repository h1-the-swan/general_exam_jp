# Jason Portenoy

General Exam repository
May, 2017

To compile PDF, run:
```
make
```

Requires pdflatex, biber/biblatex, latexmk, pandoc, pandoc-citeproc, pandoc-crossref.

The `Makefile` will pandoc convert the sections from markdown to latex, then use latexmk to compile to pdf. Biber and BibLaTeX are used for the bibliography.

The text is included in the main TeX file, in the `inputs/` directory. The sections were composed in Markdown, and are converted using pandoc---see the `Makefile`.

The exam questions are in `inputs/000-general_exam_questions_email_jw.markdown`. These are not included in the final PDF.

Many of the sections contain empty links to sections/subsections. This is a hack to force pandoc to create a hyperref, and to make referencing work across different sections.
