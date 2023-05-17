let dengi = document.querySelector('.dengi')
let b1 = document.querySelectorAll('[data-opi]')
let colorBtns1 = document.querySelectorAll('.buttonsss')
let colorBtns2 = document.querySelectorAll('.buttons')
let img = document.querySelectorAll('.imgs_iph')

let pictures = {
    White: '../img/mbp14-spacegray-select-202110 1.png',
    SpaseGrey: '../img/mbp14-spacegray-select-202110 1.png'
}
let dengiobj = {
    gb512: 0,
    tb1: 200,
    tb2: 600,
    tb4: 1200
}

let orgPrice = 1999

b1.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-opi')
        dengi.innerHTML = orgPrice + dengiobj[key]
    }
})

let pictures2 = {
    violet:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578',
    gold:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840519',
    silver: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840488',
    black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840510'
}
colorBtns2.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.innerHTML
        img.src = pictures2[key]
    }
})
colorBtns1.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.innerHTML
        img.src = pictures[key]
    }
})