/** Origin data 
 * 假設供應茶飲的國營企業，每個月都會查看 customer 的使用紀錄
 * This funct is assumed by Joy cause in the book has no example of this func
 * it acquires a reading of the tea meter, 
 * and return a hardcoded reading in this example 
 * but in a real world scenario 
 * it might be getting the reading from a database, a web service, a file or other data source.
 */
function acquireReading() {
    const data = {
        customer: "ivan",
        quantity: 10,
        month: 5,
        year: 2017,
    }
    return data;
}

/** client 1, client 2, client 3 指的是在 code base 中不同地方有使用到 baseRate 的代碼 */

// client 1: 計算該使用者在某年某月使用的茶飲數量所必須繳的稅額（茶在英國視為生活必需品，必須繳稅）
const aReading1 = acquireReading();
const baseCharge = baseRate(aReading1.month, aReading1.year) * aReading1.quantity;
console.log('baseCharge', baseCharge); // test result: 20

// client 2: taxableCharge: 計算法規允許的基本免稅額
const aReading2 = acquireReading();
const base = (baseRate(aReading2.month, aReading2.year) * aReading2.quantity);
const taxableCharge =  Math.max(0, base - taxThreshold(aReading2.year));
console.log('taxableCharge', taxableCharge); // test result: 0

// client 3: 在 code base 中其他地方，寫了跟 client 1 一樣的邏輯，並且使用了 Extract Function
const aReading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading3);
function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
}
function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
}
console.log('basicChargeAmount', basicChargeAmount); // test result: 20
class Reading {
    constructor(data) {
      this._customer = data.customer;
      this._quantity = data.quantity;
      this._month = data.month;
      this._year = data.year;
    }
    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month()    {return this._month;}
    get year()     {return this._year;}
}

/** Following funct is assumed by Joy cause in the book has no related example */
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

