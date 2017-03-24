// @flow
const editor = require('editor')
const fs = require('fs')
const path = require('path')

const createContent = require('./create')
const createId = require('./create-id')

module.exports = function (opts: object) {
  const now = new Date()
  const entryId = createId(now, heading)
  const filename = entryId + '.md'
  const filePath = path.join(entryDir, filename)
  const content = createContent(date, heading, message)

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
