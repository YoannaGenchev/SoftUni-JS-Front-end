function orders(product, quantity) {
    let pricePerUnit;
    
    if (product === "coffee") {
        pricePerUnit = 1.50;
    } else if (product === "water") {
        pricePerUnit = 1.00;
    } else if (product === "coke") {
        pricePerUnit = 1.40;
    } else if (product === "snacks") {
        pricePerUnit = 2.00;
    }
    
    let totalPrice = pricePerUnit * quantity;
        console.log(totalPrice.toFixed(2));
}