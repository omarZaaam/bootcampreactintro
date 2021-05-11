/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/

function reverseBits(inputNumber) {
  if (inputNumber == 0 || inputNumber == 1) {
    return inputNumber;
  }

  const bits = inputNumber.toString(2).split("");
  return parseInt(bits.reverse().join(""), 2);
}

module.exports = reverseBits;
