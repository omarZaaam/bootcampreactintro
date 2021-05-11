const reverseBit = require("./reverseBits");

/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 
which is 267.

You can assume that the number is not negative.
*/

describe("reverse bits", () => {
  test("return 0 when provided 0", () => {
    const inputNumber = 0;
    const expectedReversedBit = 0;
    const actualReversedBit = reverseBit(inputNumber);
    expect(actualReversedBit).toEqual(expectedReversedBit);
  });
  test("return 267 when provided 417", () => {
    const inputNumber = 417;
    const expectedReversedBit = 267;
    const actualReversedBit = reverseBit(inputNumber);
    expect(actualReversedBit).toEqual(expectedReversedBit);
  });

  test("return 1 when provided 1", () => {
    const inputNumber = 1;
    const expectedReversedBit = 1;
    const actualReversedBit = reverseBit(inputNumber);
    expect(actualReversedBit).toEqual(expectedReversedBit);
  });

  test("return 13 when provided 44", () => {
    const inputNumber = 44;
    const expectedReversedBit = 13;
    const actualReversedBit = reverseBit(inputNumber);
    expect(actualReversedBit).toEqual(expectedReversedBit);
  });
});
