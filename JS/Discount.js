document.getElementById('btn-primary').addEventListener('click', function () {
    const textElement = document.getElementById('product-price');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);


    const thirtyPercent = textElementValue - 50;

    document.getElementById('product-price').innerText = thirtyPercent;

})

document.getElementById('btn-discount').addEventListener('click', function () {
    const promoCode = document.getElementById('coupon-field').value;

    if (promoCode == "DISCOUNT30") {
        const outPut = document.getElementById('product-price').innerText;
        const result = parseInt(outPut - 150);
        document.getElementById('product-price').innerText = result;

    }
    else {
        alert('Invalid Promo')
    }

})

document.getElementById('coupon-field').value = '';

