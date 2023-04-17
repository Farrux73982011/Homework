let i = 9;
let parol = 7777;
let p = prompt('Пароль');

do{
  if(p !== parol){
    p =+prompt(`У вас ещё ${i} попытки`);
  }
  else if(p == parol , i == 9){
    prompt('Добро пожаловать!'); 
  }
 else if (0){
    prompt("Попробуйте позже!");   
  }
i--;
}while(
  i>0
)