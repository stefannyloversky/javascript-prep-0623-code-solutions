const person = {
  firstName: 'Stefanny',
  lastName: 'Loversky',
  hobby: 'working out',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Software Engineer';
console.log("The person's job is:", person.job);
person['previousJob'] = 'Financial Analyst';
console.log("The person's previous job is:", person['previousJob']);
console.log('The complete person object:', person);
