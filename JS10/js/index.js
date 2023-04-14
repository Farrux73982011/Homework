let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 9.9
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    },
    {
        id: 7,
        model: "aston martin",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]

cars.forEach((item) => {
    cars.discount = ''
    if(item.price >= 10000){
        item.discount = "30%"
    }
})


cars.forEach((cars) => {
    document.write(`
        Model: ${cars.model} <br>
        Price: ${cars.price > 100000 ? `<b>${cars.price}</b>` : `<span>${cars.price}</span>`} <br>
        Company: ${cars.company}  <br>
        Discount: ${cars.discount} <br>
        pros:${cars.engineForce * 100 / 10}%
        <div class="engine" >
            <div class="fill" style="width: ${cars.engineForce * 100 / 10}%" ></div>
        </div>
    <hr>
    `)
})  


console.table(cars);