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
const rawReading1 = acquireReading();
const aReading1 = enrichReading(rawReading1);
const baseCharge = aReading1.baseCharge;
console.log('baseCharge', baseCharge);

// client 2
const rawReading2 = acquireReading();
const aReading2 = enrichReading(rawReading2);
const taxableCharge = aReading2.taxableCharge;
console.log('taxableCharge', taxableCharge);

// client 3
const rawReading3 = acquireReading();
const aReading3 = enrichReading(rawReading3);
const basicChargeAmount = aReading3.baseCharge;
console.log('basicChargeAmount', basicChargeAmount);

function enrichReading(original) {
    const result = deepClone(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
}
function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function baseRate(month, year) {
    // hypothetical calculations to determine base rate based on month and year
    const baseRate = 2;
    if(year >= 2020 && month >= 6) baseRate +=1;
    return baseRate;
}
function taxThreshold(year) {
    // hypothetical calculations to determine tax threshold based on year
    const taxThreshold = 100;
    if(year >= 2021) taxThreshold +=50;
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
