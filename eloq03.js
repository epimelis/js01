//note : a variable is a function!

var square = function(num) {
    return num*num
};

console.log(square(8))

var makeNoise = function() {
    console.log("Plink!")
}

makeNoise()

var power=function(base, exponent) {
 var result;
 console.log("result=" + result);
 result=1;
 console.log("result=" + result);
 for (var count=0; count<exponent; count++) {
    result*=base;
 }
 return result;
}

console.log(power(2,4))

console.log("---------------Variable scope inside and outside functions------------------------------");

var x = "aaa";
var f1 = function() {
  console.log("value of x inside f1=" + x)
  var x = "bbb";
  console.log("value of x inside f1=" + x)
};
f1();
console.log("value of x outside f1=" + x)

console.log("---------------------------------------------");
var f2 = function() {
  x = "ccc";
  console.log("value of x inside f2=" + x)
};
f2();
console.log("value of x outside f2=" + x)

// → inside f2

console.log("------------------Nested scope---------------------------");
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape())


