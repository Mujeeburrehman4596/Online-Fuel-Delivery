const form = document.getElementById('orderForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fuelType = document.getElementById('fuelType').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('deliveryLocation').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Display confirmation
    alert(`Order Submitted!\nFuel Type: ${fuelType}\nQuantity: ${quantity} Liters\nLocation: ${location}\nContact: ${contactNumber}`);

    // Clear form
    form.reset();
});
