let arrowup0 = document.querySelector('arrow_up0')
let arrowdown0 = document.querySelector('arrow_down0')
let arrowup1 = document.querySelector('arrow_up1')
let arrowdown1 = document.querySelector('arrow_down1')
let arrowup2 = document.querySelector('arrow_up2')
let arrowdown2 = document.querySelector('arrow_down2')

arrowup0.onclick = () =>{
    speed_value += 10
    energy_value -= 10
    energy.innerHTML = `${energy_value} km`
    speed.innerHTML = `${speed_value} km/h`

}

arrowdown0.onclick = () =>{
    speed_value -= 10
    energy_value += 10
    energy.innerHTML = `${energy_value} km`
    speed.innerHTML = `${speed_value} km/h`
    
}


arrowup1.onclick = () =>{
    temperature_value += 10
    energy_value += 10
    energy.innerHTML = `${energy_value} km`
    temperature.innerHTML = `${temperature_value}°`

}

arrowdown1.onclick = () =>{
    temperature_value -= 10
    energy_value -= 10
    energy.innerHTML = `${energy_value} km`
    temperature.innerHTML = `${temperature_value}°`
    
}

arrowup2.onclick = () =>{
    disks_value += 10
    price_value += 500
    price.innerHTML = price_value
    disks.innerHTML = disks_value
}

arrowdown2.onclick = () =>{
    disks_value -= 10
    price_value -= 500
    price.innerHTML = price_value
    disks.innerHTML = disks_value
}