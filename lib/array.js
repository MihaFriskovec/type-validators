const isArray = (args) => {
  if (
    args instanceof Array &&
    Array.isArray(args)) {
    return true
  }

  return false
}