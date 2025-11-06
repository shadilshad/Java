
let username = window.prompt("whats your name?");
console.log(username)
document.getElementById("user").innerHTML+= username ;



let cars = ["bmw","audi","honda"];
document.getElementById("hello").innerHTML+= "<br>"+cars;
let bmw=cars[0];
document.getElementById("hello").innerHTML+= "<br>"+bmw;
let len=cars.length;
document.getElementById("hello").innerHTML+= "<br>"+len;
let last = cars[cars.length-1];
document.getElementById("hello").innerHTML+= "<br>"+last;
cars.forEach((items,index,array)=>{console.log(items,index);});
document.getElementById("hello").innerHTML+= cars.toString();
let last1=cars.pop();
document.getElementById("hello").innerHTML+= "<br>"+last1;
let last2=cars.push("maruti");
document.getElementById("hello").innerHTML+= "<br>"+last2;
let first=cars.shift();
document.getElementById("hello").innerHTML+= "<br>"+first;
let first1=cars.unshift("porsche");
document.getElementById("hello").innerHTML+= "<br>"+first1;
let bike = ["yamaha","scooter"];
document.getElementById("hello").innerHTML+= "<br>"+bike;
let vehicles= cars.concat(bike);
document.getElementById("hello").innerHTML+= "<br>"+cars;
let bor=cars.sort();
document.getElementById("hello").innerHTML+= "<br>"+vehicles;
let cor=cars.reverse();
document.getElementById("hello").innerHTML+= "<br>"+cor +"<br>";


let num=[2,4,5,6,7,8];
let num1=num.map(multiply)
function multiply(value){
    return value*2;
}
document.getElementById("hello").innerHTML+= num1;



let user={
    name:"shadil",
    age:21,
}
function sayhi(){
    alert("merry chrismtas yall");
}
const button = document.getElementById("yo");
button.innerHTML += " Hey pal "+ username + " click here";
button.addEventListener("click" , sayhi);