"use strict"

let car = {
    mark: "Skoda",
    model: "Oktavia",
    year: 2007,
    "average speed": 120,
};
function infoCar() {
    for (let key in car) {
        console.log(key)
        console.log(car[key])
    }
}
function getTimeRoad(l) {
    let t = Math.trunc(l / (car["average speed"]) / 4)
    if (t = (l / (car["average speed"]))) { return l / (car["average speed"]) + " " + "hour" }
    if (t < 1) { return l / (car["average speed"]) + " " + "hour" }
    return t + l / (car["average speed"]) + " " + "hour"
}
// infoCar()
// let a = getTimeRoad(1200)
// console.log(a)

let frack1 = {
    num: 2,
    denom: 6,
}
let frack2 = {
    num: 5,
    denom: 8,
}

function getFrackAdd() {
    let i = 1
    do { i++ }
    while (!((i % frack1.denom) === 0 && (i % frack2.denom) === 0))
    return i / frack1.denom * frack1.num + i / frack2.denom * frack2.num + "/" + i
}
function getFrackSub() {
    let i = 1
    do { i++ }
    while (!((i % frack1.denom) === 0 && (i % frack2.denom) === 0))
    return i / frack1.denom * frack1.num - i / frack2.denom * frack2.num + "/" + i
}
function getFrackMult() {
    return frack1.num * frack2.num + "/" + frack1.denom * frack2.denom
}
function getFrackDiv() {
    return frack1.num * frack2.denom + "/" + frack1.denom * frack2.num
}
function getFrackReduc() {
    let a = frack1.num;
    let b = frack1.denom;
    a = Math.abs(a);
    b = Math.abs(b);
    if (a == 0) {
        return frack1.num / b + "/" + frack1.denom / b
    }
    else while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    };
    return frack1.num / a + "/" + frack1.denom / a;
};


// let b = getFrackReduc()
// console.log(b)