        //----------------------  Calculate ----------------------//

document.getElementById('cal-btn').addEventListener('click', function(){
    
    // ------------ Income
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = parseFloat(incomeInput.value);
    
    // ------------------ Food
    const foodInput = document.getElementById('food-input');
    const foodInputText = parseFloat(foodInput.value);
    foodInput.value = '';
    // ---------------- rent
    const rentInput = document.getElementById('rent-input');
    const rentInputText = parseFloat(rentInput.value);
    rentInput.value = '';
    // -------------- clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = parseFloat(clothesInput.value);
    clothesInput.value = '';

    // -------------Total-expenses
    const totalExpensesInput = document.getElementById('total-expenses');
    const totalExpensesAmount = parseFloat(totalExpensesInput.innerText);
    const totalCost = foodInputText + rentInputText + clothesInputText;
     totalExpensesInput.innerText = totalExpensesAmount + totalCost;
    
    // ------------------------Balance
     const restMoneyInput = document.getElementById('rest-money');
     const restMoneyInputAmount = parseFloat(restMoneyInput.innerText);
     restMoneyInput.innerText = incomeInputText - totalCost;
    

})
    //----------------- Save --------------------------//

    document.getElementById('save-btn').addEventListener('click', function(){

        const incomeInput = document.getElementById('income-input');
        const incomeInputText = parseFloat(incomeInput.value); 
        const saveInput = document.getElementById('save-btn');
        const saveInputText = parseFloat(saveInput.value);
        const savingAmount = document.getElementById('saving-amount');
        const savingAmountT = parseFloat(savingAmount.innerText);
        savingAmount.innerText = incomeInputText / saveInputText;
    })
