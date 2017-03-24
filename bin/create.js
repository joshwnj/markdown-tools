#!/usr/bin/env node

/*

  Usage: mdt-new -h "optional heading" -m "optional entry text"

  - creates a new file in cwd
  - open with $EDITOR

  - -d (optional) specify directory
*/

const minimist = require('minimist')
const main = require('../lib/main')

const argv = minimist(process.argv.slice(2))

const heading = (argv.h || '').trim()
const message = (argv.m || '').trim()
const opts = {
  entryDir: argv.d || process.cwd(),
  suppressEditor: Boolean(argv.noeditor),
  verboseOutput: Boolean(argv.verbose)
}

main(opts, heading, message)
