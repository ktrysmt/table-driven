function tabledriven () {
  const a = Array.prototype.slice.call(arguments, 0, 3)

  if (a.length === 0) {
    throw new Error('Should be always accept any arguments.')
  }

  if (a.length < 2) {
    throw new Error('Should be that the number of arguments is 2 or 3.')
  }

  const array = Array.isArray(a[0]) ? a[0] : false
  const fn = (typeof a[1] === 'function') ? a[1] : false
  const isAsync = (typeof a[2] === 'undefined') ? false : a[2]

  if (array === false) {
    throw new Error('The first argument should be an array type.')
  }

  if (fn === false) {
    throw new Error('The second argument should be a function type.')
  }

  if (typeof isAsync !== 'boolean') {
    throw new Error('The third argument should be a boolean type.')
  }

  if (isAsync === true) {
    return callAsAsync(array, fn)
  } else {
    return callAsSync(array, fn)
  }
}

function callAsAsync (array, fn) {
  return (async () => {
    let result = []
    for (const i of array) {
      if (Array.isArray(array[i])) {
        result[i] = await fn(...array[i])
      } else {
        result[i] = await fn(array[i])
      }
    }
    return result
  })()
}

function callAsSync (array, fn) {
  let result = []

  for (const i of array) {
    if (Array.isArray(array[i])) {
      result.push(fn(...array[i]))
    } else {
      result.push(fn(array[i]))
    }
  }
  return result
}

module.exports = tabledriven
