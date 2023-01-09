const product = {
    basePrice: 5,
    discountThreshold: 10,
    discountRate: 0.1
};
const quantity = 15;
const shippingMethod = {
    feePerCase: 2,
    discountThreshold: 50,
    discountedFee: 1,
    isNeedShipFee: false, // 控制是否實施商城全館免運活動
};

// 計算最終價格
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    const shippingCost = shippingMethod.isNeedShipFee ? applyShipping(priceData, shippingMethod) : 0;
    return priceData.basePrice - priceData.discount + shippingCost;
}
// 使用產品資訊計算產品價格
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
            * product.basePrice * product.discountRate;
    return { basePrice, quantity, discount }; // priceData interface
}
 // 使用貨運資訊計算運費
function applyShipping(priceData, shippingMethod) {
   
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
            ? shippingMethod.discountedFee : shippingMethod.feePerCase; 
    const shippingCost = priceData.quantity * shippingPerCase;
    return shippingCost;
}
const price = priceOrder(product, quantity, shippingMethod);
console.log('price', price);