//Total Price
function totalPrice() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostTotal = parseInt(memoryCost.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostTotal = parseInt(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostTotal = parseInt(deliveryCost.innerText);
    const totalAll = bestPriceTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAll;
}

//update Memory
function updateMemoryPrice(is16GB) {
    var memory = document.getElementById('memory-cost');
    if (is16GB) {
        memory.innerText = 180;
    }
    else {
        memory.innerText = 0;
    }
}
//memory 8gb
document.getElementById('memory_btn').addEventListener('click', function () {
    updateMemoryPrice(false);
    totalPrice();
});
//memory 16gb
document.getElementById('memory_btn_plus').addEventListener('click', function () {
    updateMemoryPrice(true);
    totalPrice();
});

//update storage
function updateStoragePrice(ssd) {
    var ssdCost = document.getElementById("storage-cost");
    if (ssd == 256) {
        ssdCost.innerText = 0;
    }
    if (ssd == 512) {
        ssdCost.innerText = 100;
    }
    if (ssd == 1024) {
        ssdCost.innerText = 180;
    }
}

//storage 256gb
var ssd256 = document.getElementById('storage-256');
ssd256.addEventListener("click", function () {
    StorageCharge = updateStoragePrice(256);
    totalPrice();
});
//storage 512gb
var ssd512 = document.getElementById('storage-512');
ssd512.addEventListener("click", function () {
    StorageCharge = updateStoragePrice(512);
    totalPrice();
});
//storage 1TB
var ssd1024 = document.getElementById('storage-1TB');
ssd1024.addEventListener("click", function () {
    updateStoragePrice(1024);
    totalPrice();
});

//update Delivery
function updateDeliveryCost(isDeliveryCharge) {
    var delivery = document.getElementById('delivery-cost');
    if (isDeliveryCharge) {
        delivery.innerText = 20;
    }
    else {
        delivery.innerText = 0;
    }
}
//prime Delivery 
document.getElementById('prime-delivery').addEventListener('click', function () {
    updateDeliveryCost(false);
    totalPrice();
});
//delivery charge
document.getElementById('delivery-charge').addEventListener('click', function () {
    updateDeliveryCost(true);
    totalPrice();
});
//pomo code apply
document.getElementById('apply-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    const userText = textField.value;
    //check input
    if (userText == 'stevekaku') {
        total();
    }
    textField.value = '';
});
//Total
function total() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseFloat(bestPrice.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostTotal = parseFloat(memoryCost.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostTotal = parseFloat(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostTotal = parseFloat(deliveryCost.innerText);
    const totalAll = (bestPriceTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal) * 0.8;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = totalAll;
}
