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
function updateStoragePrice(is1TB, is512GB) {
    var storage = document.getElementById('storage-cost');
    if (is1TB) {
        storage.innerText = 180;
    }
    else if (is512GB) {
        storage.innerText = 100;
    }
    else {
        storage.innerText = 0;
    }
}

//storage 256gb
document.getElementById('storage-btn').addEventListener('click', function () {
    const storageCost256 = document.getElementById('storage-cost').innerText = 0;
    // updateStoragePrice(false);
    totalPrice();
});
//storage 512gb
document.getElementById('storage-btn-add').addEventListener('click', function () {
    const storageCost512 = document.getElementById('storage-cost').innerText = 100;
    //updateStoragePrice(false);
    totalPrice();
});
//storage 1TB
document.getElementById('storage-btn-plus').addEventListener('click', function () {
    const storageCost1 = document.getElementById('storage-cost').innerText = 180;
    // updateStoragePrice(true);
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
//Delivery Cost
document.getElementById('prime-delivery').addEventListener('click', function () {
    updateDeliveryCost(false);
    totalPrice();
});
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
