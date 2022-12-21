function radianToDegree(radian) {
    degree = radian * (180 / 3.1416);
    return degree;
}

const radian1 = 10;
const degree1 = radianToDegree(radian1);
console.log(degree1.toFixed(2));

const radian2 = 25;
const degree2 = radianToDegree(radian2);
console.log(degree2.toFixed(2));

const radian3 = 199;
const degree3 = radianToDegree(radian3);
console.log(degree3.toFixed(2));