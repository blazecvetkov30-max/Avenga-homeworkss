function calculatePrice() {

    let numberOfPhnes = 30;

    let pricePerPhone = 119.95;

    let taxRate = 0.05;

    let subtotal = numberOfPhnes * pricePerPhone;

    let tax = subtotal * taxRate;

    let totalPrice = subtotal + tax;
    document.getElementById("result").innerHTML =
        "Subtotal: $" + subtotal.toFixed(2) + "<br>" +
        "Tax (5%): $" + tax.toFixed(2) + "<br>" +
        "Total Price: $" + totalPrice.toFixed(2);
}
