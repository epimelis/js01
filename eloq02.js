
var ten=10;
console.log("Calculate value : " + ten*ten);

console.log(Math.max(2, 4));

console.log("------------------------------------");

var num=0;
while (num<3) {
console.log(num);
num+=1;
}

console.log("------------------------------------");

var num=0;
for (var num=0; num<10; num+=1) {

    if (num==3) {
            console.log("skipping the printing of number " + num)
            continue
    }

    console.log(num)

    if (num==7) {
        console.log("Breaking loop at num " + num)
        break;
    }

}
console.log("------------------------------------");
console.log("Current number is " + num)
switch (num) {
    case 1 :
        console.log("We are at 1")
        break
    case 2 :
        console.log("We are at 1")
        break
    default:
        console.log("We are at 3 or above")
}