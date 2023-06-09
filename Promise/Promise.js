// Promise

// Q1- page no 30
// Q2-
let count = 0;
setTimeout(()=>{
    console.log(++count);
    setTimeout(()=>{
        console.log(++count);
        setTimeout(()=>{
            console.log(++count);
            setTimeout(()=>{
                console.log(++count);
                setTimeout(()=>{
                    console.log(++count);
                    setTimeout(()=>{
                        console.log(++count);
                        setTimeout(()=>{
                            console.log(++count);
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
},1000);

// Q3-
    function NumbPromise(num, timeout){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                console.log(num);
                res("Run Successfully...")
            },timeout);
        })
    }
    function NumTime(){
        NumbPromise("1", 1000)
        .then(()=> NumbPromise("2", 2000))
        .then(()=> NumbPromise("3", 3000))
        .then(()=> NumbPromise("4", 4000))
        .then(()=> NumbPromise("5", 5000))
        .then(()=> NumbPromise("6", 6000))
        .then(()=> NumbPromise("7", 7000))
    }
    NumTime();
// Q4-

function King(num) {
    return new Promise((res, rej)=>{
        if(num == 10){
            res("Promise Resolved")
        }
        else{
            rej("Promise Reject")
        }
    });
}
King(10).then((d)=>{ console.log(d)}).catch((err)=>{console.log(err)});

// Q5-
function one(rome) {
    console.log(rome, " is outer function");
}
function call(a, b, myCallBack){
    let sum = a * b;
    myCallBack(sum);
}
call(3,5, one);

// Q6-

// Q7
const pro = new Promise((res, rej)=>{
    let name = "Andy"
    if (name === "Andy") {
        res("Hurry🥳")
    }
    else{
        rej("So Sorry 🙇")
    }
})
pro.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// Q8
function Dis(nums, timeout){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(nums);
            res("Promise Resolve...!!")
        }, timeout);
    })
}

async function Call(){
    await Dis("A", 2000);
     Dis("E", 1000);
     Dis("I", 4000);
     Dis("O", 3000);
     Dis("U", 5000);
}

Call();

// Q9
const S1 = new Promise((res, rej)=>{
    let name = "King";
    if (name === "King") {
        res("Welcome To Beach");
    } 
    else {
        rej("Your not Welcome hear");
    }
})
S1.then((da)=>{console.log(da)}).catch((err)=>{console.log(err)})

const S2 = new Promise((res, rej)=>{
    let height = 6.3;
    if (height == 6.3) {
        res("Your So Tall")
    } 
    else {
        rej("Your To Short");
    }
})
S2.then((da)=>{console.log(da)}).catch((err)=>{console.log(err)})

const S3 = new Promise((res, rej)=>{
    let add = "New York";
    if (add === "New York") {
        res("Wow😮")
    }
    else{
        rej("Shhhhe 😔")
    }
})
S3.then((da)=>{console.log(da)}).catch((err)=>{console.log(err)})

Promise.all([S1,S2,S3]).then((data)=> console.log(data)).catch((err)=> console.log(err));