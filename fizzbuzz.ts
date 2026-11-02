export const fizzbuzz = (number: number): string => {
  const string = number.toString();
  let result = "";

  if (number % 3 === 0 || string.includes("3")) {
    result += "Fizz";
  }

  if (number % 5 === 0 || string.includes("5")) {
    result += "Buzz";
  }

  if (result === "") {
    return string;
  }

  return result;
};
