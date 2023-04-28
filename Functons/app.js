// Q1-
function first() {
    console.log("Hello Check");
}
first();

// Q2-
function add(a, b,){
    a = 3;
    b = 4;

    var sum = a+b;
    console.log("Sum of 3,4 is",sum);
}
add();

// Q3-

const arrow = ()=>{
    console.log("Its arrow function");
}
    arrow();
// Q4
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


// Q5-
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Q6-

var x = 21;
a();
b();

function a() {

x = 20;
console.log(x);
};
function b() {

    x = 40;
console.log(x);
};

// Q7
function fac(n) {
    if (n==0) {
        return 1;
    }
    return n * fac(n-1)
}
console.log(fac(10));


// Day2

// Q2
// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

// Q3
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

// Q4
const greet =  function(name){
    return function(m){

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");
