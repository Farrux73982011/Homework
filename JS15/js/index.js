function maxName (n1, n2, n3){
    let max_n = []
    max_n.push(n1, n2, n3)
    let maxx = max_n.reduce((a, b) => a.length > b.length ? a : b)
    console.log(maxx);
}

maxName('Alex', 'George', 'Michael')

let number = [12, 3, 7, 9, 11, 777, 333, 100]

for (let i = 1; i < number.length; i++) {
    let j = i;
    while (j > 0 && number[i] < number[--j]) {
        if (j == 0 || number[i] >= number[j - 1]) {
            let x = number[i];
            for (let k = i; k > j; k--)
                number[k] = number[k - 1];
            number[j] = x;
        }
    }
}

console.log(number);