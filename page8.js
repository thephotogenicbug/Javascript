console.log("Asc order for loop example");
for(var i=1; i<=5; i++){
    console.log(i);
}
console.log("----Loop in desc order----");
for(var i=10; i>=1; i--){
    console.log(i);
}

console.log("For Loop with condition");
for(var i=1; i<=10; i++){
    if(1%2==0){
        console.log(i);
    }
}


console.log("For While Loop with condition");
var i=1;
while(i>=10){
    console.log(i);
    i--;
}

console.log("Do While Example");
var i=1;
do{
    console.log(i);
    i++;
}
while(i<=10);

console.log("Difference between do while and while loop");
var i=15;
while(i<=10){
    console.log("while says : ", i);
}

var j=15;
do{
    console.log("Do says : " , j);
    j++;
}
while(j<=10);