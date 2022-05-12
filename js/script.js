function showDeliveryAddress() {
    var x = document.getElementById("deliveryAddress");
    x.style.display = "block";
}

function hideDeliveryAddress() {
    var x = document.getElementById("deliveryAddress");
    x.style.display = "none";
}

function validateRegistrationForm() {
    // Input Name
    let name = document.forms["registrationForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Password Validation
    let password = document.forms["registrationForm"]["password"].value;
    if (password == "") {
        alert("Password must be filled out"); 
        return false;
    }
    if (password.length < 7) {
        alert("Password must be 7 characters long"); 
        return false;
    }

}

function showPaymentInformation() {
    var x = document.getElementById("payment");
    x.style.display = "block";
}

function hidePaymentInformation() {
    var x = document.getElementById("payment");
    x.style.display = "none";
}

function checkBillingAddress() {
    let deliveryAddress = document.getElementById('deliveryAdd').value;
    let billingAddress = document.getElementById('billingAdd');
    let checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true && deliveryAddress !==""){
        billingAddress.value = deliveryAddress; 
    } else {
        alert('Please Fill Up Your Delivery Address');
        return checkBox.checked = false;
    }
}