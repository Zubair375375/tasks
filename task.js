// TASK 1
let numDigits = "123";
let sum = 0;
for (let i = 0; i < numDigits.length; i++) {
  sum = sum + Number(numDigits[i]);
}
console.log(sum);

// TASK 2
let num1 = 2;
let num2 = 5;
let sumOfRange = 0;
for (let i = num1; i < num2 + 1; i++) {
  sumOfRange = sumOfRange + i;
}
console.log(sumOfRange);

// TASK 3
let norArray = [1, 3, 2, 4, 5];
let arrayAverage = 0;
for (let i = 0; i < norArray.length; i++) {
  arrayAverage = arrayAverage + norArray[i];
}
let result = arrayAverage / norArray.length;
console.log("Array Average is : " + result);

// TASK 4
let string1 = "Car";
let string2 = "Bat";
if (string1.length === string2.length) {
  console.log(string1 + " and " + string2 + " are equal");
} else {
  console.log(string1 + " and " + string2 + " are not equal");
}

// TASK 5
let randomString = "saylani";
let strings = randomString.split("");
let swap = 0;
swap = strings[0];
strings[0] = strings[strings.length - 1];
strings[strings.length - 1] = swap;
console.log(strings.join(""));
