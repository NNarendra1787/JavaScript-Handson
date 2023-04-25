// Javascript by Question
// Q1- 
const IdAccess = document.getElementById('text');

// Q2-
const ElementAccess = document.getElementsByTagName('h1');
ElementAccess[0].innerHTML="";
// Q3-
const ClassAccess = document.getElementsByClassName('box');
ClassAccess[0].innerHTML="";
// Q4-
function ChangeMe() {
    const ChangeIt = document.getElementById('change');
    ChangeIt.innerHTML="Hello World";
}
const check = document.querySelector("#change");
check.addEventListener('click', function(){
    check.innerHTML = "Hello World"
});
// Q5- 
function ReplaceMe() {
    const ReplaceIt = document.querySelector('#Replace');
    ReplaceIt.innerHTML=" Welcome To Elevation Academy";
}
// Q6- 
    const ColorChanger = document.querySelector("#Heading");
    ColorChanger.addEventListener('click', function(){
        ColorChanger.style.color = 'red';
    });

// Q7-
function direction() {
    let changeDimention = document.getElementById('Dimention');
    if (myDir.style.flexDirection === 'row') {
        myDir.style.flexDirection = 'column';
    }
    else{
        myDir.style.flexDirection = 'row';
    }
}

const myDir = document.getElementById('Dimention');
    myDir.addEventListener('click', function(){
        if (myDir.style.flexDirection === 'row') {
            myDir.style.flexDirection = 'column';
        }
        else{
            myDir.style.flexDirection = 'row';
        }
    
});
// Q9-
setInterval(updateTime, 1000)
function updateTime() {
    let myTime = new Date();
    let myHR = myTime.getHours();
    let myMin = myTime.getMinutes();
    let mySecd = myTime.getSeconds();


    const ShowTime = document.querySelector('#Timer');
    ShowTime.innerHTML= "" + myHR + ":" + myMin + ":" + mySecd;
}

// Q10 - 
// let RandomNumber = parseInt(Math.random()*100) + 1;
// let sixRandom = parseInt(Math.random()*6) + 1;
// console.log(RandomNumber);
// console.log(sixRandom);
// if(sixRandom === 1){
//     img.src = './one.jpg'
// }
