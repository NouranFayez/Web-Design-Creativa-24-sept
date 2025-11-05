

let form = document.querySelector('#myForm')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log('submit')
})


// let nameInput = document.getElementById('userName')
// nameInput.addEventListener('input' , function(e){
//     console.log(e)
// })

let nameValidation = (input)=>{

    let inputValue = input.value.trim()
    if(inputValue.length < 3)
        handleError(input , "at least 3 character")
        //  input.nextElementSibling.innerText = "at least 3 character"
    else 
        handleError(input)
        //  input.nextElementSibling.innerText = ""


}

let handleError = (input , msg = "")=>{
    input.nextElementSibling.innerText = msg
}


let emailValidation = (input)=>{
    let inputValue = input.value
    // let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    console.log(reg.test(inputValue))
    if(!reg.test(inputValue)) handleError(input , "enter a valid email")
        else handleError(input)

}


form.addEventListener('input' , (e)=>{
    // console.log(e)
    // console.log(e.target.id) 

    if(e.target.id == "userName"){
        nameValidation(e.target)
    }
    else if (e.target.id == 'userEmail')
        emailValidation(e.target)
})



// let str = "lorem ipsum lorem"

// let reg = /lorem/g
// // let reg = new RegExp("lorem")

// console.log(reg.test(str))
// console.log(str.match(reg))


let str = "price : 50 , discount : 10 , tax : 5"

let reg = /\d+/g

// console.log(reg.test(str))
// console.log(str.match(reg))

let scrollDiv = document.getElementById('scrollDiv')
scrollDiv.addEventListener('scroll' , (e)=>{
    console.log(e.target.scrollTop)
})


window.addEventListener('scroll' , (e)=>{
    console.log(document.documentElement.scrollTop)
})


let UploadInput = document.getElementById('UploadInput')
let uploadBtn = document.getElementById('uploadBtn')
uploadBtn.addEventListener('click' , ()=>{
    UploadInput.click()
})
