var input = 100;
if(isNaN(input) ){
    console.log(input ," - is a string and length is ", input.length);
}else{
    if(input % 2==0){
        console.log(input , " - is even number");
    }else{
        console.log(input , " - is odd number");
    }
}