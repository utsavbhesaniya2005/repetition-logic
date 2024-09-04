// 1. Multiplication Table
var proInput = 5;
let pro1 = 1;
let total = "";


while(pro1<=10){

    total += `${proInput} * ${pro1} = ${proInput * pro1}<br>`;
    pro1++;
    
}

document.querySelector(".pro1").innerHTML += total;

// 2. Factorial Number

let fact = 1;
let pro2 = 1;

while(pro2<= proInput){

    fact = fact * pro2;
    pro2++;
}
document.querySelector(".pro2").innerHTML = `Factorial Of ${proInput} Is :- ${fact}`;

// 3. Armstrong Number



let armNumber = 1000;
let pro3 = 1;
let armTotal = "";

while (pro3 <= armNumber) {
    let sum = 0;
    let arm = pro3;
    let armCount = pro3.toString().length;

    while (arm > 0) {
        let r = arm % 10;
        sum += Math.pow(r, armCount); // r^count
        arm = parseInt(arm / 10);
    }

    if (sum === pro3) {
        armTotal += `${pro3} <t>`;
    }

    pro3++;
}

document.querySelector(".pro3").innerHTML = armTotal;


// 4. Palindrome Number
let palNumber = 150;
let pro4 = 1;
let palShow = "";

while(pro4 <= palNumber){

    let convStr = pro4.toString();
    let revStr = convStr.split('').reverse().join('');

    if(convStr === revStr){

        palShow += `${pro4} <t>`;
    }
    pro4++;
}
document.querySelector(".pro4").innerHTML = palShow;


// 5. Fibonacci Series
let fSeries = 200;
let pro5 = 1,a = 0, b = 1;
let fTotal = `${a} ${b}`;

while(pro5 <= fSeries - 2){
    let nStep = a + b;
    
    if(nStep >= fSeries){
        break;
    }
    
    fTotal += `<t> ${nStep}`;

    a = b;
    b = nStep;
    pro5++;    
} 
document.querySelector(".pro5").innerHTML = fTotal;


// 6. Prime Number
let primeSeries = 50;
let pro6 = 2;
let primeShow = "";

while(pro6 <= primeSeries){
    let prime = true;
    let j = 2;
    while(j <= Math.sqrt(pro6)){
        if(pro6 % j === 0){
            prime = false;
            break;
        }
        j++;
    }
    if(prime){
        primeShow += `${pro6} <t>`;
    }
    pro6++;
}
document.querySelector(".pro6").innerHTML = primeShow;


// 7. Magic Number
let mNumber = 19;
while(mNumber >= 10){
    let mTotal = 0;
    let temp = mNumber;
    
    while (temp > 0) {
        mTotal += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    mNumber = mTotal;
}
if(mNumber === 1){
    document.querySelector(".pro7").innerHTML = "The Number is a Magic Number."
}else{
    document.querySelector(".pro7").innerHTML = "The Number is a Not An Magic Number.";
}

// 8. Disarium Number
let dNum, pro8, dCount, dSum, dDigit;
dNum = 1000;
pro8 = dNum;
dCount = 0;
while (pro8 > 0) {

    pro8 = Math.floor(pro8 / 10);
    dCount++;

}

dSum = 0;
pro8 = dNum;
while (pro8 > 0) {

    dDigit = pro8 % 10;
    dSum += Math.pow(dDigit, dCount); 
    pro8 = Math.floor(pro8 / 10);
    dCount--;

}

if (dSum == dNum) {
    document.querySelector(".pro8").innerHTML = `${dNum} Is Disarium Number`;
} else {
    document.querySelector(".pro8").innerHTML = `${dNum} Is Not Disarium Number`;
}


// 9. sum Integers
let sInt = 0;
let pro9 = 0;
do{
    sInt = sInt + pro9;
    pro9++;
}while(pro9 <= 30);
document.querySelector(".pro9").innerHTML = sInt;

// 10. FizzBuzz
let pro10 = 1;
do{
    if(pro10 % 3 === 0 && pro10 % 5 === 0){

        document.querySelector(".pro10").innerHTML = "FizzBuzz";
    }else if(pro10 % 3 === 0){

        document.querySelector(".pro10").innerHTML = "Fizz";
    }else if(pro10 % 5 === 0){

        document.querySelector(".pro10").innerHTML = "Buzz";
    }else{

        
    }

    pro10++;
}while(pro10 <= 100);

// 11. 1-10 Numbers
let print10 = '';
for(let pro11 = 1;pro11 <= 10;pro11++){

    print10 = print10 + pro11;
    if(pro11 < 10){

        print10 += '-'
    }
}
document.querySelector(".pro11").innerHTML = print10;

// 12. Sum of Squares
let sumSquare = 0;
for(let pro12 = 1;pro12 * pro12 <= 100;pro12++){
    
    sumSquare += pro12 * pro12;
}
document.querySelector(".pro12").innerHTML = `1+4+9+...+100 = ${sumSquare}`;

//13. Pattern 1
let fetchRow = 5;
for(let i = fetchRow;i >= 1;i--){

    for(let j = 5;j >= i;j--){
        
        document.querySelector(".pro13").innerHTML += `<t>  ${j}`;
    }
    document.querySelector(".pro13").innerHTML += "<br>";
}

// Pattern 2
let rowFetch = 5;
let num = 1;
for(let i = 1;i <= rowFetch;i++){

    for(let j = 1;j <= i;j++){
        
        document.querySelector(".pro14").innerHTML += `<t>  ${num}`;
        num++;
    }
    document.querySelector(".pro14").innerHTML += "<br>";
} 