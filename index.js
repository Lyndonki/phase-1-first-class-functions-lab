function returnFirstTwoDrivers(array) {
    return array.slice(0, 2);
}
function returnLastTwoDrivers(array) {
    return array.slice(2, 4);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
selectingDrivers[0]()
selectingDrivers[1]()

function createFareMultiplier(fare) {
    return function (num) {
        return fare * num;
    }
}
const myFunction = createFareMultiplier();
function fareDoubler(num2) {
    return num2 * 2
}
function fareTripler(num3) {
    return num3 * 3
}
function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {
    return selectingDrivers(arrayOfDrivers);
}
