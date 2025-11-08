$(document).ready(function(){
    // document.querySelector('.owl-carousel')
  $(".owl-carousel").owlCarousel({
    items : 6 ,
    margin: 20 , 
    nav : true ,
    loop: true , 
    navText : [`<i class="fa-solid fa-chevron-left bg-info text-white"></i>` , `<i class="fa-solid fa-chevron-right"></i>`]
  });
});


// localStorage.setItem("userName" , "Nouran")
// localStorage.setItem("userAddress" , "Nasr city")
// localStorage.setItem("userEmail" , "Nouran@email.com")


localStorage.removeItem('userAddress')

let users = [
    {name : "Nouran" , email:'nouran@email.com'},
    {name : "tamer" , email:'tamer@email.com'},
    {name : "Ahmed" , email:'Ahmed@email.com'},
]


localStorage.setItem('users' , JSON.stringify(users))

// console.log(users.toString())

console.log(JSON.stringify(users))


let obj = {
    name : "Marwa" , email : "Marwa@email.com"
}

let usersLocalStorage =JSON.parse(localStorage.getItem('users')) 

// usersLocalStorage.push(obj)
// console.log(usersLocalStorage)


// console.log(localStorage.getItem('test'))

console.log(1)


console.log(3)



function set(callBack){
    setTimeout(()=>{
    callBack(20 , "Javascript")
} , 5000)
}

let result = set((res , data)=>{
    console.log(data)
    console.log(res+10)
    let h3Element = document.getElementById('h3Element')
    h3Element.innerText = data
    return res
})







// array.forEach(element => {
    
// });

