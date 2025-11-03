// var let const 

var firstName = "Nouran"
var firstName = true
console.log(firstName)
// console.log(lastName)
let lastName = "Ahmed"
lastName = 30
// let lastName = 30

const address = "Nasr city"
// address = "october"
// consolo.log(address)


if(true){
    var a = true
    let b = true
    const c = true
}

// console.log(a)
// console.log(b)
// console.log(c)


function getName(){
    var num = 30
}
getName()

// console.log(num)

var age = 31
let address2 = "October"
const x = "str"

// console.log(window.age)
// window.console.log('javascript')



// DOM ==> document Object Model 

// console.log(document)

// console.log()

// let h1Elements = document.getElementsByTagName("h1")

// h1Elements[0].innerText = "Javascript"

// console.log(typeof h1Elements)

// h1Elements.forEach(element => {
//         element.innerText = "Javascript"
// });

// Array.from() ==> search

// for(let i = 0 ; i < h1Elements.length ; i++){
//     h1Elements[i].textContent = "Javscript DOM"
// }

// let ElementsClass = document.getElementsByClassName('element_class')

// ElementsClass.firstName = "Marwa"

// console.log(ElementsClass)

// let h2 = document.getElementById('h2_ID')

// console.log(h2)

// h2.style.color = "blue"
// h2.style.fontSize = "35px"

// events ==>  https://www.w3schools.com/jsref/dom_obj_event.asp

let div = document.querySelector("#div_ID")

// div.className = "card padding-bottom"

// div.classList.add("card" , "padding-top")
// div.classList.remove("margin-auto")
// div.classList.toggle("container")

// console.log(div)

// let divs = document.getElementsByTagName('div')

// console.log(divs)

// function changeDiv(id){
//     let element = document.getElementById(id)
//     element.classList.add('card')


// }


function handleMouseEnetr(element){
    console.log('mouse enter')
    console.log(element)
    element.classList.toggle('card')
}


// let input = document.getElementById('input_id')
// input.addEventListener('input' , (e)=>{
//     // console.log('typing....')
//     console.log(input.value)
//     console.log(e.target.value)
//     e.target.nextElementSibling.innerText = e.target.value
// })


let form = document.getElementById('form')
let users = []
form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log('submit')
    console.log(e)
    console.log(e.target[0].value)
    console.log(e.target[1].value)

    let obj = {
        firstName :e.target[0].value,
        lastName : e.target[1].value
    }

    users.push(obj)

    console.table(users)
})

let elementDiv = document.getElementById('div_element')

let newH2 = document.createElement('h2')

newH2.innerText = "Javascript"

console.log(newH2)

elementDiv.appendChild(newH2)