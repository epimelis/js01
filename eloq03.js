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

console.log("------------------Functions as values---------------------------");

//more details in Chapter 5

console.log("------------------Call stack - infinite---------------------------");
/*
  function chicken() {
    return egg();
  }
  function egg() {
    return chicken();
  }
  console.log(chicken() + " came first.");
 */
console.log("------------------Optional args---------------------------");

console.log("r", 2, "d", 2)

console.log("------------------Closures---------------------------");
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

console.log("------------------")

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10


console.log("------------------Recursion--------------------------");

function power_recurse(base, exponent) {
    if (exponent==0)
        return 1;
    else
        return base*power_recurse(base, exponent-1);
}

console.log(power_recurse(5,3))

console.log("------------------Growing functions --------------------------");

function zeroPad(aaa, maxLength) {
    var sss =String(aaa);
    while (sss.length<maxLength)
        sss="0"+sss;
        return sss;

}


function printFarmInventory (cntCows, cntChicken) {
    console.log("Number of cows=" + zeroPad(cntCows, 3));
    console.log("Number of cows=" + zeroPad(cntChicken, 3));
}

printFarmInventory(3,50)