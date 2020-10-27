console.log("We are at tut6");
const name = "Abhishek";
const greeting = "Good morning";
// console.log(name + " "+greeting)

let html;
html = "<h1> This line for Heading</h1>"+
    "<p>this is my PARA</p>";

html = html.concat("This", " str2");
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[1]);
// console.log(html.indexOf("for")) 
// console.log(html.lastIndexOf("my")) 
// console.log(html.charAt(5)) 
// console.log(html.endsWith("str2"))
// console.log(html.includes("str2="))
// console.log(html.substring(2,6))
// console.log(html.slice(0,4))
// console.log(html.split(">"))

console.log(html.replace("This", "for"));

let fruits1 = "Banana"
let fruits2 = "Apple"
let myHtml = `Hello ${name}
     <h1> This is heading</h1>
     <p>You like ${fruits1} and ${fruits2}</p>


`;

 document.body.innerHTML = myHtml;