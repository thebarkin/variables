/*
*
* HOISTING
*
* Hoisting in JavaScript means that when functions are created and run in a document they are stored in memory and can
* be executed in the code before, or after a function is written in the document.
*
* Variables can also be declared after they are used and will continue to work.
*
* Let and const variable assignments will not work this way. Only var does.

*
 */

//HOISTING EXAMPLES

myVeryCoolFunction();

function myVeryCoolFunction(){
  console.log('this function will work');
}

myName = "Richard";
console.log(myName);
var myName;


/*
*
*  LET, CONST, VAR
*
*  The major different between var and let, including const, is that var is function scoped, whereas,
*  let and const are block scoped.
*
*  For example, if you create a variable inside a function, using var inside an if statement, the variable can be
*  accessed outside of the if statement inside the function.
*
*  Let and const on the other can hand cannot be accessed outside of the if statement, since they are blocked scoped.
*
*  One difference between let and const is that let doesn't need to be assigned to a value when declared, however
*  const does need to be assigned to a value.
*
*  Const variables cannot be reassigned, however their values can be changed. Const variables are mutable, meaning,
*  if you assigned an array or an object, those can be changed, just not reassigned.
*
 */

//VARIABLE EXAMPLES

//var
var sample = "sample";

//const
const person = {
  name: "Richard",
  location: "Los Angeles"
}

//let
let lunch = "hot dogs";


//var function scoped example

function myAwesomeFunction(){
  var person = true;
  if (person){
    var otherPerson = "Fred";
  }
  console.log(otherPerson);
}

myAwesomeFunction();

//let block scoped example

function myOtherAwesomeFunction(){
  let person = true;
  if (true){
    let otherPerson = "Fred";
    console.log(otherPerson);
  }
  console.log(person);
}

myOtherAwesomeFunction();

//const block scoped example
const car = {
  brand: "Honda",
  model: "Accord",
}
console.log(car);

car.model = "Civic";

console.log(car);