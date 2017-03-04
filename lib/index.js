function tabledriven () {
  const a = Array.prototype.slice.call(arguments, 0, 2)

  if (a.length === 0) {
    throw new Error('Should be always accept any arguments.')
  }

  if (a.length < 2) {
    throw new Error('Should be that the number of arguments is 2.')
  }

  const array = Array.isArray(a[0]) ? a[0] : false
  const fn = (toString.call(a[1]) === '[object Function]') ? a[1] : false

  if (array === false) {
    throw new Error('The first argument should be an array type.')
  }

  if (fn === false) {
    throw new Error('The second argument should be an function type.')
  }

  let result = []

  for (const i in array) {
    if (Array.isArray(array[i])) {
      result.push(fn(...array[i]))
    } else {
      result.push(fn(array[i]))
    }
  }
  return result
}

module.exports = tabledriven
