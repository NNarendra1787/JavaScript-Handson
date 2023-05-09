let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]


// Q1
let StdName = studentRecords.map((student)=>{
    return student.name.toUpperCase();
});
console.log(StdName);

// Q2

let StdMarks = studentRecords.filter((Std)=>{
    return Std.marks > 50;
})
console.log(StdMarks);

// Q3

let rsult = studentRecords.filter((Std)=>{
    return Std.marks > 50 && Std.id > 120;
});
console.log(rsult);

// Q4

let ToMark = studentRecords.reduce((acc, cuv)=>acc+cuv.marks ,0);
console.log(ToMark);

// Q5

let StMarks = studentRecords.filter((Std)=>{
    return Std.marks > 50;
});

let StName = StMarks.map((std)=> std.name);
console.log(StName);

// Q6
let StGreat = studentRecords.filter((std)=> std.id> 120);
let sum = StGreat.reduce((prv, cuv)=> prv + cuv.marks, 0);
console.log(sum);

// Q7
let check = studentRecords.map(std =>{
    if (std.marks < 50) {
        return {...std, marks:std.marks + 15};    
    } 
    else {
        return std
    }
});

let filterTheRecord = check.filter(rec => rec.marks>50);
let TotalIt = filterTheRecord.reduce((prv, cuv)=> prv + cuv.marks,0);
console.log(TotalIt);

// Q8

let f1 = {name: 'Andy', class: "12th", rollNo: 32};
let f2 = {name: 'Maskra', class: "11th", rollNo: 312};
let f3 = {name: 'Rayha', class: "Graduation", rollNo: 3};
let f4 = {name: 'Alexa', class: "6th", rollNo: 43};
let f5 = {name: 'Omas', class: "12th", rollNo: 25};
let f6 = {name: 'AjLee', class: "10th", rollNo: 12};

let ArrOfObj = [f1,f2,f3,f4,f5,f6];
console.log(ArrOfObj);