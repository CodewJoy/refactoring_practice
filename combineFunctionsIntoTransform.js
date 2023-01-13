// origin data
// This function returns an object containing 
// the customer name, tea quantity, month and year of the reading.
function acquireReading() {
    const customer = "ivan";
    const quantity = 10;
    const month = 5;
    const year = 2017;
  
    return { customer, quantity, month, year };
}

// client 1
const aReading1 = acquireReading();
const baseCharge = baseRate(aReading1.month, aReading1.year) * aReading1.quantity;
console.log('baseCharge', baseCharge);

// client 2
const aReading2 = acquireReading();
const base = (baseRate(aReading2.month, aReading2.year) * aReading2.quantity);
const taxableCharge =  Math.max(0, base - taxThreshold(aReading2.year));
console.log('taxableCharge', taxableCharge);

// client 3
const aReading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading3);
function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
}
console.log('basicChargeAmount', basicChargeAmount);

function acquireReading() {
    return deepClone(reading);
}

function baseRate(month, year) {
    // hypothetical calculations to determine base rate based on month and year
    const baseRate = 2;
    if(year>=2020 && month>=6) baseRate +=1;
    return baseRate;
}
function taxThreshold(year) {
    // hypothetical calculations to determine tax threshold based on year
    const taxThreshold = 100;
    if(year>=2021) taxThreshold +=50;
    return taxThreshold;
}
  
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    let clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
}
