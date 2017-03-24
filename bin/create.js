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
const entryDir = argv.d || process.cwd()

const heading = (argv.h || '').trim();
const message = (argv.m || '').trim();
const opts = {
  suppressEditor: Boolean(argv.noeditor),
  verboseOutput: Boolean(argv.verbose)
}

// ensure entryDir exists
mkdirp.sync(entryDir)

main(opts, heading, message)
