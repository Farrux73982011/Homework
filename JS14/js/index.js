let pro = +prompt('Сколько раз хотите складывать что-то?')
let fibinar = [0, 1];
for (let i = 2; i <= pro; i++) {
  fibinar[i] = fibinar[i - 2] + fibinar[i - 1];
}
console.log(fibinar);
