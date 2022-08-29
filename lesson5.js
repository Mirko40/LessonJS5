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
    if (t <= 1) { return l / (car["average speed"]) + " " + "hour" }
    return t + l / (car["average speed"]) + " " + "hour"
}
// infoCar()
// let a = getTimeRoad(1200)
// console.log(a)

let frack1 = {
    num: 2,
    denom: 3,
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

let b = getFrackDiv()
console.log(b)