let pro = +prompt('Сколько раз хотите складывать что-то?')
let fibonacci = [0, 1];
for (let i = 2; i <= pro; i++) {
    fibonacci[i - 2] + fibonacci[i - 1]
}
console.log(fibonacci);
