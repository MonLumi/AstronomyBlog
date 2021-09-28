function productCheck() {
    var product = document.getElementById('product').value;
    console.log(product);

    if (product == 0) {
        document.getElementById('productError').innerHTML = "Please select our product.";
    } else {
        document.getElementById('productError').innerHTML = null;
    }
}

function nameCheck() {
    var name = document.getElementById('name').value;
    console.log(name);
    if (name.length == 0) {
        document.getElementById('nameError').innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        document.getElementById('nameError').innerHTML = "Your name should not exceed 100 characters.";
    } else {
        document.getElementById('nameError').innerHTML = null;
    }
}

function messageCheck() {
    var message = document.getElementById('message').value;

    if (message.length > 30) {
        document.getElementById('messageError').innerHTML = "Your message should not exceed 30 characters.";
    } else {
        document.getElementById('messageError').innerHTML = null;
    }
    console.log(message);
}

function dateCheck() {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() >= 10) ? today.getMonth() + 1 : "0" + (today.getMonth() + 1);
    var date = today.getDate();

    var stringToday = year + "-" + month + "-" + date;

    var deliverDate = document.getElementById("deliverDate").value;
    if (deliverDate.length == 0) {
        document.getElementById('dateError').innerHTML = "Please fill out the deliver date.";
    } else if (deliverDate < stringToday) {
        document.getElementById('dateError').innerHTML = "Please select Deliver date from today";
    } else {
        document.getElementById('dateError').innerHTML = null;
    }

    console.log(deliverDate);
}

function addressCheck() {
    var address = document.getElementById('address').value;
    console.log(address);

    if (address.length == 0) {
        document.getElementById('addressError').innerHTML = "Please fill out the address";
    } else if (address.length > 500) {
        document.getElementById('addressError').innerHTML = "Address should not exceed 500 characters.";
    } else {
        document.getElementById('addressError').innerHTML = null;
    }
}

function check() {
    productCheck();
    nameCheck();
    messageCheck();
    dateCheck();
    addressCheck();
}