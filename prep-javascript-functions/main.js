function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(3, 3);
console.log('addTwoNumbersesult', sum);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}
const minutes = convertHoursToMinutes(3);
console.log('minutes:', minutes);

function getGreeting(name) {
  const result = 'Hello ' + name + '!';
  return result;
}
const greeting = getGreeting('Ste');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}
const sumTimesFive = addAndMultiplyBy5(2, 3);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}
const productDivideByFive = multiplyAndDivideBy5(10, 10);
console.log('productDivideByFive:', productDivideByFive);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
const sub = subtractTwoNumbers(20, 9);
console.log('subtraction:', sub);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}
const circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}
const fullName = getFullName('Stefanny', 'Loversky');
console.log('fullName:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}
const cubed = cube(5);
console.log('cubed:', cubed);
