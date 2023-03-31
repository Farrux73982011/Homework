let num = prompt("Напиши число любое число").trim();

if((num % 2) === 0){
    alert("Чётное")
}else{
    alert("Нечётное")
}

let name_ = prompt("Тебя как зовут").toLowerCase().trim();
let age = prompt("Тебе сколько лет").trim();

if((name_ % 2) === 0 && age >= 18){
    alert("Welcome")
}else{
    alert("Go away")
}

let name_2 = prompt("Тебя как зовут").toLowerCase().trim();

if(name_2[0] === "a"){
    alert("Welcome")
}else{
    alert("Go away")
}

