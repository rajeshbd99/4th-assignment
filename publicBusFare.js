function publicBusFare(passenger) {
    totalFare = ((passenger % 50) % 11) * 250;
    return totalFare;
}

const public = 112;
const fare = publicBusFare(public);
console.log(fare);
