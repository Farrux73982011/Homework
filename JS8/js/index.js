let farrux = {
    name: "farrux",
    gender: "mujik, silach",
    isMarried: false,
    
    card:{
        name_user: "I.Farrux", 
        number: 7398
    },
    cars:{
        car_1: "Lamborgini",
        car_2: "Buggati",
        car_3: "BMW",
        car_4: "Gelik"
    },
    live:{
        countrie: "Uzbekistan",
        sity: "Samarkand",
        streat:"Buyuk Ipak Yoli"
    },
    languagest: "Uzbek, Russian, English, tajik"
}
let passport ={
        series: "AF",
        number: 7398,
        data: "2011-12-14",
        exp: "3000-1-1"
    }


Object.assign(farrux, {passport})

let obj_keys = Object.keys(farrux)
let obj_values = Object.values(farrux)
let obj_keys_and_valeus = Object.concat(farrux, obj_keys, obj_values, obj_keys, obj_values)

let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}


console.log(obj_values, obj_keys, obj_keys_and_valeus, farrux);

