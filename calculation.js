const sumAll = nums => {
  let total = 0

  while (nums.length) {
    total += nums.pop()
  }

  return total
}

module.exports = sumAll