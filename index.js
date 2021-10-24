var billPrice = document.getElementById('bill-price').value = 100;







var noPeople = document.getElementById('noOfPeople').value;

var newTip = 0;

function tipamount5() {
    newTip = billPrice / 20;
    document.getElementById('tip-amount').value = newTip;

    var totalPerPerson = newTip + billPrice;
    document.getElementById('total-amount').value = totalPerPerson;

}

function tipamount10() {
    newTip = billPrice / 10;
    document.getElementById('tip-amount').value = newTip;

    var totalPerPerson = newTip + billPrice;
    document.getElementById('total-amount').value = totalPerPerson;
}

function tipamount15() {
    newTip = (billPrice * 3) / 5;
    document.getElementById('tip-amount').value = newTip;

    var totalPerPerson = newTip + billPrice;
    document.getElementById('total-amount').value = totalPerPerson;
}

function tipamount25() {
    newTip = billPrice / 4;
    document.getElementById('tip-amount').value = newTip;

    var totalPerPerson = newTip + billPrice;
    document.getElementById('total-amount').value = totalPerPerson;
}

function tipamount50() {
    newTip = billPrice / 2;
    document.getElementById('tip-amount').value = newTip;

    var totalPerPerson = newTip + billPrice;
    document.getElementById('total-amount').value = totalPerPerson;

}

function custom() {
    newTip = parseInt(document.getElementById('customno').value);
    document.getElementById('tip-amount').value = newTip;

    var totalPerPerson = newTip + billPrice;
    document.getElementById('total-amount').value = totalPerPerson;
}

function reset() {
    document.getElementById('bill-price').value = "";
    document.getElementById('total-amount').value = "";
    document.getElementById('tip-amount').value = "";
}


function people() {
    var people = document.getElementById('noOfPeople').value;
    if (people == 0) {

    }
}