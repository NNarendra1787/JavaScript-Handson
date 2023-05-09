// Q1
// const parent = {
//     sayBro : function(){
//         console.log('Say Bro To the Parent');
//     }
// }
// const child1 = Object.create(parent);
// child1.name = "KingStan";
// console.log(child1.name);

// Q2
// const grandParent = {
//     SayGp : function(){
//         console.log("GrandParent Say GP to everyone");
//     }
// }

// const Dad = Object.create(grandParent);
// Dad.SayP = function(){
//     console.log("Parent Say Hello To Everyone");
// }

// const son = Object.create(Dad);
// son.SayMan = function(){
//     console.log("Say Hi Man to Everyone");
// }

// son.SayGp();
// son.SayP();
// son.SayMan();

// Q3- 
// const arr = [1,2,3,4,5,6,7,8,9,10];

// let sum = arr.reduce((prev, curr)=> prev += curr, 0);
// console.log(sum);

// Q4
function getAllProperties(obj){
    let props = [];

    props = Object.getOwnPropertyNames(obj);

    let proto = Object.getPrototypeOf(obj);
    while(proto){
        props = props.concat(Object.getOwnPropertyNames(proto));
        proto = Object.getPrototypeOf(proto);
    }
    return props;
}