console.log("Array in js");

let marks = [13,53,34,64,75,86]

let fruits = ["Apple", "Banana", "grapes","cherry"]
let mixed = ["str", 34,43,[32,56,64]];
let arr= new Array(64,45,"Abhishek");


// console.log(marks)
// console.log(marks[5])
// console.log(fruits)
// console.log(mixed)
// console.log(arr[0])
// console.log(arr.length)
// console.log(Array.isArray("Abhishek"))

// arr[0]= "Abhi";
// console.log(arr);

// let value = marks.indexOf(64)
// marks.push(898);
// marks.unshift(100);
//  marks.pop()
//  marks.shift()

// marks.splice()
console.log(marks)

let marks2 = [4,54,3,64,34]
marks = marks.concat(marks2);

console.log(marks);

let myobj= {
    name:"Abhishek",
    channel: "youtube",
    isActive: true,
    marks1:[32,3,43,2]

}
console.log(myobj)
console.log(myobj.isActive)