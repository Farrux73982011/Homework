let arr = ["morgen", "nikolay", "alexandr", "yulduz", "timati"];

let numbers = [2, 4, 1, 4, 7, 3, 2, 7, 9, 3, 2];

let even = [];
let odd = [];
let flt = numbers.filter((item) => {
  if (item % 2 === 0) {
    even.push(item);
  } else {
    odd.push(item);
  }
});

console.log(even);
console.log(odd);

let max_length = arr[0];
for (let i of arr) {
  if (max_length.length < i.length) {
    max_length = i;
  }
}
console.log(max_length);
