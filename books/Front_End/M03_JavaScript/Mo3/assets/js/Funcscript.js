// TODO: Write Your JavaScript Code Here


var evaluateEquality = function(value1, value2) {
    if (value1 === value2) {
        console.log("They are equal in type and value");
    } else if (value1 == value2) {
        console.log("They are equal in value");
    } else {
        console.log("The values are not equal");
    }
};
// evaluateEquality(10, 10);
// evaluateEquality(10, "10");
evaluateEquality(10, 'ten');
