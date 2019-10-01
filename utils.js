/* eslint-disable semi */

function random(n) {
  const num = Number(n)
  return Math.floor(Math.random() * num)
}

function randomD(n) {
  return random(n) + 1
}

function randomRolls(n, s) {
  const numRolls = Number(n)
  const side = Number(s)

  /**
   * Array(number) creates an Array object
   * whose length property is equal to the number passed
   * Example:
   * {
   *  length: number
   * }
   */
  const result = Array(numRolls).fill(0)

  return result.map(() => randomD(side))
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
