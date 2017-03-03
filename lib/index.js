function tabledriven () {
  const a = arguments

  if (a.length === 0) {
    throw new Error('Should be always accept any arguments.')
  }

  if (a.length !== 2) {
    throw new Error('Should be that the number of arguments is two.')
  }

  if (Array.isArray(a[0]) === false) {
    throw new Error('The first argument should be an array type.')
  }

  if (toString.call(a[1]) !== '[object Function]') {
    throw new Error('The second argument should be an function type.')
  }

  const array = a[0]
  const fn = a[1]
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
