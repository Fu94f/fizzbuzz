import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("plain number when no rule applies", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  test("multiple of 3 gives Fizz", () => {
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  test("contains 3 gives Fizz", () => {
    expect(fizzbuzz(31)).toBe("Fizz");
  });

  test("multiple of 5 gives Buzz", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  test("contains 5 gives Buzz", () => {
    expect(fizzbuzz(52)).toBe("Buzz");
  });

  test("both rules give FizzBuzz", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});