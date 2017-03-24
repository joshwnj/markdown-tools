// @flow
const editor = require('editor')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const createContent = require('./create')
const createId = require('./create-id')

type Opts = {
  entryDir: string,
  suppressEditor: boolean,
  verboseOutput: boolean
}

module.exports = function (opts: Opts, heading: string, message: string) {
  mkdirp.sync(opts.entryDir)

  const now = new Date()
  const entryId = createId(now, heading)
  const filename = entryId + '.md'
  const filePath = path.join(opts.entryDir, filename)
  const content = createContent(now, heading, message)

  fs.writeFileSync(filePath, content)

  if (opts.suppressEditor) {
    process.stdout.write(
      opts.verboseOutput ?
        `${filePath}:${content.split('\n').length + 1}:0:\n` :
        filename
    )
  }
  // open the editor
  else {
    editor(filePath, function (code, sig) {
      process.stdout.write('wrote ' + filename + '\n')
    })
  }
}
