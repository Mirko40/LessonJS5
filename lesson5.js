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
    return l / (car["average speed"])
}
infoCar()
let a = getTimeRoad(200)
console.log(a)