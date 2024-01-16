var validator = require('validator');

console.log(validator.isEmail('foo@bar.org'));
console.log(validator.isISBN('978-0-596-52068-7'));
console.log(validator.isUppercase('FOo'));
console.log(validator.isURL('https://www.google.ca'));
console.log(validator.isMobilePhone('709-725-8420'));