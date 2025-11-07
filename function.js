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