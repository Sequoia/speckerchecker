# speckerchecker
Small utility to check for the presence of Spec files corresponding to each JS file in a directory tree

## Purpose
[Istanbul](https://gotwarlost.github.io/istanbul/), a popular Javascript test-coverage tool, only checks coverage for files for which corresponding `Spec` files **already exist**.  If no `Spec` file exists, the `src` file isn't included in the coverage report.  See [my question](http://stackoverflow.com/questions/23813295/how-to-get-karma-coverage-istanbul-to-check-coverage-of-all-source-files) on Stack Overflow for history.

## Goals
* [x] Check for presence of files in `spec` tree corresponding to files in `src` tree
* [ ] Allow for spec & src tree configuration
* [ ] Allow for list of files to exclude
* [ ] figure out whether to throw or exit or w/e
* [ ] tests
