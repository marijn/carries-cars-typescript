#!/usr/bin/env sh

####
#
# Node wrapper that pipes output to the `tap-diff` program.
#
# Configure a Node.js program in Intellij as follows:
#
#   Node interpreter:       /absolute/path/to/bin/node-tap-diff.sh
#   Working directory:      /absolute/path/to/
#   Javascript file:        node_modules/.bin/alsatian
#   Application parameters: "./**/**/**/*.spec.ts" --tap
#
# Alsatian should now output human readable color coded test results
#
####

node $@ | node_modules/.bin/tap-diff
