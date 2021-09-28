function nameCheck() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        document.getElementById('nameError').innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        document.getElementById('nameError').innerHTML = "Your name should not exceed 100 characters.";
    } else {
        document.getElementById('nameError').innerHTML = null;
    }
    console.log(name);
}

function emailCheck() {
    var email = document.getElementById('email').value;
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if (email.length == 0) {
        document.getElementById('emailError').innerHTML = "Please fill out your email.";
    } else if (email.length > 100) {
        document.getElementById('emailError').innerHTML = "Your email should not exceed 100 characters.";
    } else if (!regex.test(email)) {
        document.getElementById('emailError').innerHTML = "Your email form doesn't correct! Please try following form: name@domain";
    } else {
        document.getElementById('emailError').innerHTML = null;
    }
    console.log(email);
}

function subjectCheck() {
    var subject = document.getElementById('subject').value;

    if (subject.length == 0) {
        document.getElementById('subjectError').innerHTML = "Please fill out your subject.";
    } else if (subject.length < 50) {
        document.getElementById('subjectError').innerHTML = "Subject should not shorter than 50 characters.";
    } else if (subject.length > 250) {
        document.getElementById('subjectError').innerHTML = "Subject should not exceed 250 characters.";
    } else {
        document.getElementById('subjectError').innerHTML = null;
    }

    console.log(subject);
}

function messageCheck() {
    var message = document.getElementById('message').value;

    if (message.length == 0) {
        document.getElementById('messageError').innerHTML = "Please fill out your message.";
    } else if (message.length > 500) {
        document.getElementById('messageError').innerHTML = "Message should not exceed 500 characters.";
    } else {
        document.getElementById('messageError').innerHTML = null;
    }

    console.log(message);
}

function checkAll() {
    nameCheck();
    emailCheck();
    subjectCheck();
    messageCheck();
}