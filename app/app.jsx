var React = require('react');
var ReactDOM = require('react-dom');

var obj1 = {
  name: "Elijah",
  location: "Texas"
}

var obj2 = {
  age : 20,
  ...obj1
}

console.log(obj2);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
