 console.log("javascript")

//  variables ==> data type (string , number , boolean (true / false) 
// , undefined , null)
// var , let , const 

// camel case 
var firstName = "Nouran"

// console.log(firstName)
// js = case sensitive
// console.log(FirstName)

var lastName = "Ahmed"

var FullName = "my name is "+ firstName + " " + lastName

// console.log(FullName)

var bio = `my name is ${firstName} ${lastName}
my age is 31`
// console.log(bio)

var age = 31

var isGraduated = true

var r 
// console.log(r)

var n = null

// console.log(n)

// var userName = prompt("enter your name")

// console.log(userName)

var h = ""

//  Mathematical Operation ==> (+ - / * ** % ++ --)

var r = 10 
var h = "html"
var s = r + h

var k = "dfghjk"


console.log(k/r) // NaN ==> Not a Number

// ++ increment 

var h = 20

// console.log(h++)
// console.log(h)

console.log(++h)

// -- decrement 

console.log(--h)

// Assignment Operators ==> += , -= , /= *= ...

var k = 5
// k = k +5
console.log(k+=10)

// Comparison Operator ==> (> >= < <= == === != !==)==> return boolean type

var l = 20
var m = 20
var n = "20"

// console.log(l > m)
// console.log(l >= m)

console.log(m == n) // true // value 
console.log(m === n) // false // value - data type

console.log(m != n) // false - value
console.log(m !== n) // true - value - data type


console.log(typeof(n))
console.log(typeof m)

console.log(typeof m == "number")
console.log(typeof m == "Number")

var userAddress = "Nasr city"
var userAge = 31

//  logical Operator ==> (&& || !)

// console.log(userAddress == "Nasr city" && userAge == 33)
// console.log(userAddress == "october" || userAge == 31)

// console.log(!userAddress == "Nasr city")


//  ternary operator=> (condition)? true : false

// var p = prompt('enter your Job');
// (p == "eng") ? console.log('valid job') : console.log('invalid job')


var str = "Lorem"; // true 
var str = ""; // false
var str = 20; // true
var str = 0; // false
var str = -0; // false
var str // undefined - false
var str = null // null - false
var str = false // false
var str = true // true

// var str = prompt('enter your name');

// (str) ? console.log('correct') : console.log('wrong');


// if condition 



// if(condition) {
    //     true
    // }
    // else {
        //     false
        // }
        
        
        var job = prompt('enter your job')

        if(job == "dev" || job == "developer"){
            var result = "developer"
             console.log(result)

        }
        else if(job == "Accountant"){
            console.log('accountant')
        }
        else if(job == "doc"){
            console.log('doctor')
        }
        else {
            console.log('wrong')
        }


        