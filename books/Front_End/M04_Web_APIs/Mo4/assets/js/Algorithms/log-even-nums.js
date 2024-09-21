// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

 var logEvenNums = function(num) {
     for(var i = 0; i <= num; i++){
         if (i % 2 === 0) {
             console.log(i);
         }
     }
 };

// var logEvenNums = function(num) {
//     for(var i = 0; i <= num; i++){
//         if (i % 2 !== 1) {
//             console.log(i);
//         }
//     }
// };


// var x = function (y){
//     if (y % 2 === 0){
//         return "Even";
//     } else {
//         return "Odd";
    
//     }
// }
// x(9);

var expect = chai.expect;

before(function() {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function(...args) {
    var values = [];

    var log = function(args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function() {
      return values;
    };

    return log;
  })();
});

describe("logEvenNums", function() {
  it("log even numbers 0 through `num`", function() {
    var num = 13;

    logEvenNums(num);

    expect(console.log.calledWith()).to.eql([0, 2, 4, 6, 8, 10, 12]);
  });
});

after(function() {
  console.log = window._temp.log;
  delete window._temp;
});

