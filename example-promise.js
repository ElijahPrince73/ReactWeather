// function getTempCallback(location, callback) {
//   callback(undefined, 78)
//   callback("City Not Found")
// }
//
// getTempCallback("Texas", function (err, temp) {
// if (err){
//   console.log('error', err);
// }
// else {
//   console.log('success', temp  );
// }
// })

// function getTempPromise (location) {
//   return new Promise (function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City Not Found');
//     },1000)
//   })
// }
//
// getTempPromise('Texas').then(function (temp) {
// console.log('Promise Success', temp);
// }, function (err) {
// console.log('Promise error', err);
// })


function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a  == 'number' && typeof b  == 'number') {
      resolve(a + b);
    }else {
      reject("A and B need to be numbers")
    }
  })
}

addPromise("1", 2).then(function (addedNumber) {
  console.log('Number', addedNumber);
}, function (err) {
  console.log("Error", err);
})
