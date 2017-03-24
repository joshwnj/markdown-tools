module.exports = function linkifyHeading (heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');
}
