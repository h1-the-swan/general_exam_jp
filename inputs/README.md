Some good options for converting markdown -> html:

```
pandoc --filter=pandoc-crossref --filter=pandoc-citeproc -o 010-history_and_algorithms.html -s -S -M bibliography=../general_exam.bib -M link-citations=true --mathjax 010-history_and_algorithms.markdown
```
