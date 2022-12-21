function isBestFriend(person1, person2) {
    bestFriend = (person1.name == person2.friend && person1.friend == person2.name);
    return bestFriend;
}

const person1 = { name: "dabul", friend: "babul" };
const person2 = { name: "babul", friend: "abul" };
const bestFrnd = isBestFriend(person1, person2);
console.log(bestFrnd);