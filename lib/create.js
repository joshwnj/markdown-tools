module.exports = function (date: date, heading: ?string, message: ?string): string {
  var lines = [];

  lines.push(`---
date: ${date.toString()}
---
`)

  if (heading) {
    lines.push('# ' + heading + '\n')
  }

  if (message) {
    lines.push('\n' + message + '\n')
  }

  return lines.join('\n')
}
