// switch case ==> strict mode



// variable 
// switch(var){
//     case 1 : ...
//     case 1 : ...
//     case 1 : ...
//     case 1 : ...
//     default: ..
// }


// var x = "30"

// switch(x){
//     case 20 : 
//     console.log('variable = 20')
//     break;
//     case 30 : 
//     console.log('variable = 30')
//     break;
//     case "30" : 
//     console.log('string = 30')
//     break;
//     default : console.log('invalid variable')
// }


// var x = 10

// switch(true){
//     case x > 20 :
//          console.log('greater than 20')
//          break
//     default: console.log('invalid number')
// }


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)


// for(variable ; condition ; increment/decrement){
//     code
// }

for(var i = 1 ; i <= 10 ; ++i){
    if(i == 8) break
    else if (i == 3) continue
    console.log(i)
    
}

// while , do-while  ==> search 


// prompt()


// function ==> block of code 

// function name(){
//     body
// }

// call()


// var p = prompt()

// function sum(){
//     var x = 20
//     var y = 30
//     var s = x + y
//     console.log(s)
//     // return x > y
//     // return "javascript"
// }
// console.log(s)
// var result = sum()


// function sum(num1 , num2 = 30){
//     // console.log(num2)
//     return num1 + num2
// }

// var r = sum(20 , 50)
// console.log(r)
// var r = sum(100 )
// console.log(r)



// function getfullName(){
//     var firstName = prompt("enter your name")
//     var lastName = prompt('enter your last name')
//     return `${firstName} ${lastName}`
// }
// console.log(getfullName())


// function looping (startNum , endNum , breakNum , contNum){

// }

// looping(1 , 30 )


// function statement 
// function bio (){
//     return "Zein Ahmed"
// }

// var fullName = bio()


// function expression 

var fullName = function(){
    return "Zein Ahmed"
}

// console.log(fullName())
fullName()
fullName()

// arrow function 

// var fullName = ()=>{
//     return 'zein Ahmed'
// }

// var fullName = ()=> 'zein Ahmed'

// var x = 20
// var result = ()=> x > 30

// result()

// prompt()


// array

// var firstName = "Zein"
// var LastName = "Ahmed"
// var age = 20
// var address = "Maadi"

var user = [ "Zein" , "Ahmed" , 20 , "Maadi"]

// console.log(user[2])

user[4] = true
// console.log(user.length)
// user[user.length] = "October"


// Methods Array 

user.push(30 , false)

user.unshift("ay 7aga" , 40)
user.pop()
user.shift()
// console.log(user)

// splice(index , deletedCount , item/s)

var courses = ["html" , "css" , "js"]

courses.splice(1 , 0 , "Bootstrap" , "Typescript")
// courses.splice(3 , 1 )
courses.splice(3 , 1 , "Angular" , "React")


// console.log(courses[0])
// console.log(courses[0])
// console.log(courses[0])
// console.log(courses[0])
// console.log(courses[0])
// console.log(courses[0])

for(var i = 0 ; i < courses.length ; i++){
    // console.log(courses[i])
}

courses.forEach((item , i , arr)=>{
    console.log(arr)
})

// includes()


