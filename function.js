let x = function(){
    alert("Hey, wassup machaa ");
}
document.getElementById("demo").innerHTML+= x();


function function_name(val){
    return val*val/val+val;
}
let result = function_name(5)
document.getElementById("demo").innerHTML+= result;
console.log(`the value is 5 and the calculated number would be ${result}`);


//generator function//

function* generatefun(){
    yield 1; //yeild shows false//
    yield 2; //if i use return here then it wont check the next one whether thats true or not, it will print as true//
    return 3; //return one shows true//
}
let generator = generatefun();
let one = generator.next(); //generator.next() -> again after that,//
let two = generator.next();
let three = generator.next();
alert(JSON.stringify(one));
alert(JSON.stringify(two));
alert(JSON.stringify(three));


//example practice//


let people = [
  { name: "Aarav", age: 21 },
  { name: "Bala", age: 22 },
  { name: "Chitra", age: 20 },
  { name: "Deepa", age: 23 },
  { name: "Eshan", age: 19 },
  { name: "Farhan", age: 24 },
  { name: "Gauri", age: 21 },
  { name: "Harini", age: 22 },
  { name: "Ishaan", age: 23 },
  { name: "Jaya", age: 20 }
];

function* findPerson(data) {
  for (let person of data) {
    yield person; // pause after each person
    if (person.name === "Deepa") {
      return "✅ Found Deepa!";
    }
  }
}

let search = findPerson(people);

console.log(search.next().value); // Aarav
console.log(search.next().value); // Bala
console.log(search.next().value); // Chitra
console.log(search.next().value); // Deepa (and stops)
console.log(search.next());       // done: true


//eval//

let z=10;
let y=20;
let result1 = eval("z+y");
console.log(result1);

