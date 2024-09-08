// TODO: Change the values and operators below to test your algorithm meets all conditions

// (T T)
var x = 50;
var expression1 = x < 75;
var expression2 = x > 40;

// (T F)
var x = 50;
var expression1 = x < 75;
var expression2 = x > 50;

// (F T)
var x = 50;
var expression1 = x < 35;
var expression2 = x > 40;

// (F F)
var x = 50;
var expression1 = x < 35;
var expression2 = x > 60;




// TODO: Write Your JavaScript Code Here
// True equal
if (expression1 && expression2) {
    console.log('T T');
} else if (expression1) {
    console.log('T F');
} else if (expression2){
    console.log('F T')
} else {
    console.log('F F');
}

// False equal
if (expression1 || expression2) {
    console.log('F F');
} else if (expression1){
    console.log('F T');
} else if (expression2) {
    console.log('T F');
} else {
    console.log('T T');
}