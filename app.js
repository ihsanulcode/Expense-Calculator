document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeDoc = document.getElementById('income');
    const foodDoc = document.getElementById('food-cost');
    const rentDoc = document.getElementById('rent-cost');
    const clothesDoc = document.getElementById('clothes-cost');
    const totalExpenseDoc = document.getElementById('total-expense');
    const balanceDoc = document.getElementById('balance');

    totalExpenseDoc.innerText = '00.00';
    balanceDoc.innerText = '00.00';
    warningMsg('Incomewarning', '');
    warningMsg('foodwarning', '');
    warningMsg('rentwarning', '');
    warningMsg('clotheswarning', '');
    if (incomeDoc.value == '') {
        warningMsg('Incomewarning', 'Enter Amount');
    }
    if (foodDoc.value == '') {
        warningMsg('foodwarning', 'Enter Amount');
    }
    if (rentDoc.value == '') {
        warningMsg('rentwarning', 'Enter Amount');
    }
    if (clothesDoc.value == '') {
        warningMsg('clotheswarning', 'Enter Amount');
    }

    if (incomeDoc.value != '' && foodDoc.value != '' && rentDoc.value != '' && clothesDoc.value != '') {
        const income = parseFloat(incomeDoc.value);
        const foodCost = parseFloat(foodDoc.value);
        const rentCost = parseFloat(rentDoc.value);
        const clothesCost = parseFloat(clothesDoc.value);

        calc = true;
        if (income < 0.0) {
            warningMsg('Incomewarning', 'Please Enter Valid Amount');
            calc = false;
        }
        if (foodCost < 0.0) {
            warningMsg('foodwarning', 'Please Enter Valid Amount');
            calc = false;
        }
        if (rentCost < 0.0) {
            warningMsg('rentwarning', 'Please Enter Valid Amount');
            calc = false;
        }
        if (clothesCost < 0.0) {
            warningMsg('clotheswarning', 'Please Enter Valid Amount');
            calc = false;
        }

        if (calc) {
            const totalExpense = foodCost + rentCost + clothesCost;;
            totalExpenseDoc.innerText = totalExpense;

            const remains = income - totalExpense;
            balanceDoc.innerText = remains;
        }
    }
})

document.getElementById('saving-btn').addEventListener('click', function () {
    const savingDoc = document.getElementById('saveAmount');
    const saveAmountDoc = document.getElementById('saveAmountText');
    const remainingBalanceDoc = document.getElementById('remainingBalanceText');
    const incomeDoc = document.getElementById('income');
    const balanceDoc = document.getElementById('balance');

    //reset amounts
    saveAmountDoc.innerText = '00.00';
    remainingBalanceDoc.innerText = '00.00';

    //reset warning message
    warningMsg('savingswarning', '');
    if ((parseFloat(incomeDoc.value) > 0.0) && (savingDoc.value != '') && !(savingDoc.value < 0.0)) {
        //converting saving input to float
        const saveInput = parseFloat(savingDoc.value);

        // calculating savings amount
        const income = parseFloat(incomeDoc.value);
        const saveAmount = income * (saveInput / 100.0);
        //calculating remaingin balance
        const balance = parseFloat(balanceDoc.innerText);
        const remainings = balance - saveAmount;

        if (saveAmount > balance) {
            warningMsg('savingswarning', 'Insufficient Balance');
        } else {
            //set saving amount inner text
            saveAmountDoc.innerText = saveAmount;
            //set remainign balance inner text
            remainingBalanceDoc.innerText = remainings;
        }
    } else if (!(parseFloat(incomeDoc.value) > 0.0)) {
        warningMsg('savingswarning', 'Calculate Expenses First');
    } else if (savingDoc.value == '') {
        warningMsg('savingswarning', 'Enter Saving Amount');
    } else if (parseFloat(savingDoc.value) < 0.0) {
        warningMsg('savingswarning', 'Enter Valid Amount');
    }
})

function warningMsg(str, msg) {
    document.getElementById(str).style.color = "red";
    document.getElementById(str).innerText = msg;
}

