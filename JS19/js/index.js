let container = document.querySelector('.container')


for (let index = 0; index < 7; index++) {
    let box = document.createElement('div')

    let imgg = document.createElement('img')

    let box_div1 = document.createElement('div')

    let h1_1 = document.createElement('h1')

    let p = document.createElement('p')

    let gruppa_inbox = document.createElement('div')

    let gruppa_inbox_div1 = document.createElement('div')

    let img_dollar = document.createElement('img')
    let number_box = document.createElement('h1')

    let gruppa_inbox_div2 = document.createElement('div')

    let img_star = document.createElement('img')
    let number_box2 = document.createElement('h1')

    let gruppa_inbox_div3 = document.createElement('div')

    let img_cube = document.createElement('img')
    let number_box3 = document.createElement('h1')

    let btn_glav = document.createElement('button')
    let btn_glav_h1 = document.createElement('h1')


    box.classList.add('box')
    imgg.classList.add('img')
    box_div1.classList.add('box_div1')
    h1_1.classList.add('h1_1')
    p.classList.add('p')
    gruppa_inbox.classList.add('gruppa_inbox')
    gruppa_inbox_div1.classList.add('gruppa_inbox_div1')
    img_dollar.classList.add('img_dollar')
    number_box.classList.add('number_box')
    gruppa_inbox_div2.classList.add('gruppa_inbox_div2')
    img_star.classList.add('img_star')
    number_box2.classList.add('number_box2')
    gruppa_inbox_div3.classList.add('gruppa_inbox_div3')
    img_cube.classList.add('img_cube')
    number_box3.classList.add('number_box3')
    btn_glav.classList.add('btn_glav')
    btn_glav_h1.classList.add('btn_glav_h1')

    h1_1.innerHTML = "MEN'S CLOTHING (120)"
    p.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
    number_box.innerHTML = 109
    number_box2.innerHTML = 3.9
    number_box3.innerHTML = 120
    btn_glav_h1.innerHTML = 'В избраное'
    imgg.src = '../img/81fPKd-2AYL 1.png'
    img_cube.src = '../img/Vector (2).png'
    img_dollar.src = '../img/Vector.png'
    img_star.src = '../img/Vector (2).png'

    container.append(box)
    box.append(imgg, box_div1)
    box_div1.append(h1_1,p,gruppa_inbox,btn_glav)
    gruppa_inbox.append(gruppa_inbox_div1, gruppa_inbox_div2, gruppa_inbox_div3)
    gruppa_inbox_div1.append(img_dollar, number_box)
    gruppa_inbox_div2.append(img_star, number_box2)
    gruppa_inbox_div3.append(img_cube, number_box3)
    btn_glav.append(btn_glav_h1)
}