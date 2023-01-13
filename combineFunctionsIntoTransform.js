// origin data
const reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

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
    return 0.03 * (1 + (month - 1) / 12) + (year - 2017) * 0.05;
}
function taxThreshold(year) {
    return 1000 + (year - 2017) * 100;
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