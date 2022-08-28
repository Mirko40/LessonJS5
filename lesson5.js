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
infoCar()
let a = getTimeRoad(1200)
console.log(a)