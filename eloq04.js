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
