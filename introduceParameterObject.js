const station = { name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
};
const operatingPlan = { temperatureFloor: 52, temperatureCeiling: 57 };

const NumberRange = (min, max) => ({
    min,
    max,
    contains: arg => (arg >= min && arg <= max),
});

const readingsOutsideRange = (station, range) =>
    station.readings.filter(r => !range.contains(r.temp));

const range = NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
const outsideRange = readingsOutsideRange(station, range);

console.log('outsideRange', outsideRange);
