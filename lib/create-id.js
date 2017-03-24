// @flow

const moment = require('moment')
const linkifyHeading = require('./linkify-heading')

const maxHeadingLength = 20

module.exports = function createEntryId (date: date, heading: string): string {
  const timestamp = moment(date).format('YYYY-MM-DD-HHmmss')
  return heading ?
    (timestamp + '-' + linkifyHeading(heading.substring(0, maxHeadingLength))) :
    timestamp
}
