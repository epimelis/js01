console.log("-----Were squirrel---------------------------")

var listOfNumbers = [2,3,5,7,11]
console.log(listOfNumbers[2])
console.log(listOfNumbers[2-1])

console.log("-----Methods---------------------------")

var testStr = "String";
console.log(typeof testStr);
console.log(typeof testStr.toUpperCase);
console.log(typeof testStr.toUpperCase());
console.log(testStr.toUpperCase());


var mack=[];
mack.push("aaa");
mack.push("bbb", "ccc");
console.log(mack);
console.log(mack.join("#"));
console.log(mack.pop());
console.log(mack.pop());
console.log(mack);

console.log("-----Objects---------------------------")

var day1={
    squirrel:false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);

var descriptions ={
    work: "Went to work",
    "touched tree": "Touched a tree"
}



var anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log("-----Represent journal as array of objects---------------------------")

var journal=[
    {events: ["work", "touched tree", "pizza"],
     squirrel: false},
    {events: ["work", "ice cream", "lasagna"],
     squirrel: false},
    {events: ["weekend", "cycling", "tennis"],
     squirrel: true},
];

console.log(journal);

console.log("-----Mutability ---------------------------")

/*The types of values discussed in earlier chapters,
such as numbers, strings, and Booleans, are all immutable.
However objects are mutable
*/

var num1=10;
var num2=num1;
var num3=20;
console.log("Num1=",num1);
console.log("Num2=",num2);
console.log("Num3=",num3);
console.log(num1==num2)
console.log("-->set num1=15")
num1=15
console.log("Num1=",num1);
console.log("Num2=",num2);
console.log("Num3=",num3);
console.log("NUM2 IS IMMUTABLE!!!")


var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 20};


console.log("Value of object1=", object1.value);
console.log("Value of object2=", object2.value);
console.log("Value of object3=", object3.value);
console.log(object1 == object2);
console.log("-->set object1.value=15")
object1.value = 15;
console.log("Value of object1=", object1.value);
console.log("Value of object2=", object2.value);
console.log("Value of object3=", object3.value);

console.log("OBJECT2 IS MUTABLE!!!")

console.log("----Squirrel log-------------------------------------------")

console.log(journal)
console.log("aaa1")
var journal =[];
console.log(journal)
console.log("aaa2")
function addEntry(events, turnIntoSquirrel) {
    journal.push(
        {events: events,
        squirrel: turnIntoSquirrel
        }
    )
};

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
console.log(journal);

console.log("----Compute correlation-------------------------------------------")
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", journal));
// → [76, 9, 4, 1]
console.log("----Objects as maps----------------------------------------")
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081

for (var event in map)
  console.log("The correlation for '" + event +
              "' is " + map[event]);
// → The correlation for 'pizza' is 0.069
// → The correlation for 'touched tree' is -0.081

console.log("----Final analysis----------------------------------------")

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);
// → 0.068599434
console.log("----------")
for (var event in correlations)
  console.log(event + ": " + correlations[event]);

  for (var event in correlations) {
    var correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)
      console.log(event + ": " + correlation);
}
console.log("----------")
for (var i = 0; i < journal.length; i++) {
  var entry = journal[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", journal)));
console.log("----------")


console.log("----Further arrayology----------------------------------------")
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}
console.log(todoList)
console.log("----------")
rememberTo("aaa")
rememberTo("bbb")
console.log(todoList)
console.log("----------")
console.log(whatIsNext())
console.log("----------")
console.log(whatIsNext())
console.log("----------")
console.log(todoList)
console.log("-----run urgentlyRememberTo-----")
urgentlyRememberTo("ccc")
console.log(todoList)

console.log("----------")

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

console.log("-----slice-----")
console.log([5, 6, 7, 8, 9].slice(2, 4));
// → [2, 3]
console.log([5, 6, 7, 8, 9].slice(2));
// → [2, 3, 4]

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log("-----String and properties----------------------------")

var myString="Fido"
myString.newProperty ="value1"
console.log(myString.toUpperCase())
console.log(myString.length)
console.log(myString.indexOf("i"))
console.log("CharAt 3=", myString.charAt("3"))
console.log("myString[3]=", myString[3])
console.log(myString.newProperty)
console.log(myString.slice(1,3))

console.log("-----arguments object----------------------------")

function args() {
console.log("There are ", arguments.length, " number of args entered");
}

args();
args(1,2,3);

var journal2=[]
function addEntry2(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal2.push(entry);
};
addEntry2(true, "work", "touched tree", "pizza",
         "running", "television");
console.log(journal2);