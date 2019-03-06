module.exports.isObject = (args) => {
  if (
    args instanceof Object &&
    typeof args === 'object' &&
    args !== null &&
    !args instanceof Array &&
    !Array.isArray(args) &&
    !args instanceof Map
  ) {
    return true
  }

  return false
}