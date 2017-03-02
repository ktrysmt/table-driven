function tabledriven () {
  const fn = arguments[arguments.length - 1]
  const args = Array.prototype.slice.call(...arguments)
  if (Array.isArray(args)) {
    let result = []
    for (const i in args) {
      if (Array.isArray(args[i])) {
        result.push(fn(...args[i]))
      } else {
        result.push(fn(args[i]))
      }
    }
    return result
  } else {
    throw new Error('Data set is not Array-Type.')
  }
}

module.exports = tabledriven
