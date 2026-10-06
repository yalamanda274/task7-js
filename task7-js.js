/// ********* Task 7 of the javascript related to the functions**************




//-----------------Named function without input and without return----------------

//1.Write a function to print the numbers from 1 to 10
function numbers(){
    for (let i=1;i<=10;i++){
        console.log(i)
}
}
numbers()


//2.Write a function to print the multiplication table of 5.

function table(){
    for (let i=1;i<=10;i++){
        console.log(`5 x ${i} = ${5*i}`)
    }
}
table()


//3.check eligible to license or not
function license(){
    age = 21
    if (age>=18){
        console.log("eligible to license")
    }
    else{
        console.log("Not eligible to license")
}
}
license()


//------------------Named functions with input without return----------------


//1.Write a function that takes a number and prints its square.
function number(num){
    console.log(`square of ${num} : ${num**2}`)
}
number(7)

//2.Write a function that takes a number and prints whether it is even or odd.

function checknum(num){
    if (num%2===0){
    console.log("even")
    }
    else{
        console.log("odd")
    }
}
checknum(7)


//3.Write a function that takes two numbers and prints their sum.
function sumoftwo(n1,n2){
    console.log(`sum of two numbers : ${n1+n2}`)
}
sumoftwo(10,20)


//-------------------Named function without input and with return-----------------

//1.Write a function that returns the sum of all even numbers from 1 to 50.
function check(){
    sum=0
    for (let i=1;i<=50;i++){
        if (i%2===0){
            sum=sum+i
        }
    }
    return sum
}
console.log(check())


//2.Write a function that returns the count of digits in 123456789.

function digit(){
    count=0
    for (let i=1;i<=9;i++){
        count=count+1
    }
    return count
}
console.log(digit())


//3.Write a function that returns the largest number among 25, 48, and 17

function large(){
    n1 = 25
    n2 = 48
    n3 = 17
    if (n1>n2 && n1>n3){
        return `${n1} is largest`
    }
    else if (n2>n1 && n2>n3){
        return `${n2} is largest`
    }
    else{
        return `${n3} is largest`
    }
}
console.log(large())
    


//-------------------Named function with input and with return-------------------
//1.Write a function that takes a number and returns whether it is an Armstrong number or not.

function armstrong(n){
    var sum = 0
    var New = n
    var digit = 0
    while (n>0){
        ld = n%10
        digit = ld**3
        sum = sum + digit
        n = Math.floor(n/10)
    }
    if (sum==New){
        return "armstrong"
    }
    else{
        return "Not armstrong"
    }
}
console.log(armstrong(153))


//2.Write a function that takes three numbers and returns their average.

function avg(a,b,c){
    let sum = a+b+c
    let avg = sum/3
    return avg
}
console.log(avg(20,20,20))


//3.calculate the electric bill
function electricbill(units){
    var bill
    if(units <= 100){
        bill = units * 2
    } 
    else if(units <= 220){
        bill = units * 3
    } 
    else {
        bill = units * 5
    }
    return bill
}
var Total = electricbill(250)
console.log("Electric Bill : ",Total)