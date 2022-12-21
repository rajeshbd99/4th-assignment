function oilPrrice(diesel, petrol, octane) {
    totalPrice = (diesel * 114) + (petrol * 130) + (octane * 135);
    return totalPrice;
}

const diesel1 = 30, petrol1 = 20, octane1 = 10;
const totalPrice1 = oilPrrice(diesel1, petrol1, octane1);
console.log(totalPrice1);