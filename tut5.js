// Type conversion & coercion

// console.log("it work or not");

let myVar;
myVar= String(34);
// console.log(myVar, (typeof myVar));

let booleanVar = true;
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr= String([1,34,343,65,3]);
// console.log(arr.length,(typeof arr));

let arr1= ([1,34,343,65,3]);
// console.log(arr1.length,(typeof arr1));

let i = 90;
// console.log(i.toString());

let stri = Number("343");
stri= Number("342d3");
stri= Number(true);
stri= Number([32,34,3,4332,5343,645,645]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.4323');
// console.log(number.toFixed(4), (typeof number));

     // Type coercion

     let mystr  = Number("534");
     let mynum= 23;

     console.log(mystr + mynum);





