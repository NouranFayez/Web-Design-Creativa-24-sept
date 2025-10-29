var numbs = [2, 30, 5, 10, 20, 40]
var result
numbs.forEach((item, i, arr) => {
    if (item > 10) {
        result = item
        // console.log(item)
    }
})

// console.log(r)
// console.log(result)
var res = numbs.find((item) => {
    return item > 10
})

var res = numbs.find(item => item > 10)
// var res = numbs.find(item => item == 1000)
var index = numbs.findIndex(item => item > 10)
// var index = numbs.findIndex(item => item == 100)

// console.log(res)
// console.log(index)

if (index == -1) numbs.push(100)

// console.log(numbs)

var newarr = numbs.filter(item => item > 10)
var newarr = numbs.filter(item => item > 1000)
var newMapArray = numbs.map(item => item * 2)
// console.log(newMapArray)

// concat()
// includes()
// indexOf()
// sort()
// reverse()
// toString()
// join()

// var user = ["Nouran" , "Ahmed" , 31 , true , "Nasr city"]

var userInfo = {
    firstName: "Zein",
    lastName: "Tamer",
    age: 20,
    address: "October",
    fullName: function () {
        return `${userInfo.firstName} ${this.lastName}`
    },
    testFun: () => {
        // console.log(this)
        return `${userInfo.firstName} ${this.lastName}`
    },

    addresses: function () {
        return {
            homeAddress: "Nasr city",
            officeAddress: "October"
        }
    }

}

console.log(userInfo.fullName())
console.log(userInfo.testFun())
console.log(userInfo.addresses().homeAddress)



// console.log(userInfo.age)
// userInfo.isGraduated = false

// console.log(userInfo)


var user1 = {
    name: "Tamer",
    address: "Maadi"
}

var user2 = {
    name: "Marwa",
    address: "October"
}

var users = [
    {
        name: "Tamer",
        address: "Maadi"
    },
    {
        name: "Marwa",
        address: "October"
    },
    {
        name: "Ahmed",
        address: "Nasr city"
    },
    {
        name: "Mohamed",
        address: "October"
    }
]

// console.table(users)



var i = users.findIndex(item => item.name == "Tamer")
// console.log(i)




///// function numberOfUsers() ==> 4
//// function addUser() ==> name , id , balance 
/// function editUserBalanceById () ==> id , newBalance
/// function deleteUserById() ==> id




// string methods 

var str = "           javascript , HTML , css , javascript                "

// console.log(str[0])
// console.log(str.length)

// console.log(str.replace("javascript" , "Angular"))
// console.log(str.replaceAll("javascript" , "Angular"))
// console.log(str.indexOf('html'))
// console.log(str.startsWith('java'))
// console.log(str.endsWith('java'))
// console.log(str.trim())
// console.log(str.trim().slice(0 , 10))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// Methods of numbers

var num = "sdfghjk" // true
var num = 30 // false
var num = true // false
// console.log(isNaN(num))

// var p = prompt('enter number')
// console.log(typeof p)
// console.log(parseInt(p))
// console.log(parseFloat(p))
// console.log(Number(p))


// console.log(Math.random()*100)
// var n = 20.6
// console.log(Math.round(n))
// console.log(Math.ceil(n))
// console.log(Math.floor(n))
// console.log(Math.max(30 , 1 , 40 , 100))
// console.log(Math.min(30 , 1 , 40 , 100))
// console.log(Math.abs(-30))



// Date Methods 

var d = new Date()


console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getSeconds())
console.log(d.getMilliseconds())
// console.log(d.)


var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


console.log(mS[d.getMonth()])

var customDate = "11/19/2020"

var newDate = new Date(customDate)
var newDate = new Date(3455)


console.log(newDate)
// console.log(d.now())

d.setFullYear(2021)
console.log(d)

console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())
console.log(d.toLocaleDateString("ar-EG" , {"weekday":"long" , "month":'long' , 'year':"numeric" }))




