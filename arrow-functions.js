names = ['bill', 'jill', 'luke'];
// name.forEach(function (name) {
// console.log('forEach', name);
// })
//
// name.forEach((name) => {
//   console.log('ES6 function', name);
// })


// var returnMe = (name) => name + '!';
// console.log(returnMe('Elijah'));

// var person = {
//   name: 'bill',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet();


var addStatement =  (a, b) => {
  return a + b;
}

console.log(addStatement(1, 2));

var addExpression = (a, b) =>  a + b;
console.log(addExpression(2,4));
