const product = {
    basePrice: 5,
    discountThreshold: 10,
    discountRate: 0.1
};
const quantity = 15;
const shippingMethod = {
    feePerCase: 2,
    discountThreshold: 50,
    discountedFee: 1
};
function priceOrder(product, quantity, shippingMethod) {
    // 使用產品資訊計算產品價格
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
            * product.basePrice * product.discountRate;
    // 使用貨運資訊計算運費
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
            ? shippingMethod.discountedFee : shippingMethod.feePerCase; 
    const shippingCost = quantity * shippingPerCase;
    // 最終價格
    const price =  basePrice - discount + shippingCost;
    return price;
}
const price = priceOrder(product, quantity, shippingMethod);
console.log('price', price);