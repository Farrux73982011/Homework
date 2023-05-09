let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");
let h1 = document.querySelector(".num");
let number = 0
plus.addEventListener( 'click', () =>{
    number++
    h1.innerHTML = number
})
reset.addEventListener('click', () =>{
    number = 0
    h1.innerHTML = number
})
minus.addEventListener('click', () =>{
    number--
    h1.innerHTML = number
})