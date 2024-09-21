var expect = chai.expect;

describe("sumArray", function() {
  it("returns the total of all the numbers in `arr`", function() {
    var arr = [4, 8, 15, 16, 23, 42];

    var result = sumArray(arr);

    expect(result).to.eql(108);
  });
});



// Write code to add all the numbers in `arr` and return the total

var arr = [3, 1, 5, 6];
var sumArray = function(arr) {
    var result = 0;

    for (var i = 0; i < arr.length; i++){
        var currentNumber = arr[i];
        result += currentNumber;
    }
    return result;
};




