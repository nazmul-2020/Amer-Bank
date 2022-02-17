        //----------------------  Calculate ----------------------//

document.getElementById('cal-btn').addEventListener('click', function(){
    
    // ------------ Income
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = parseFloat(incomeInput.value);

    // ------------------ Food
    const foodInput = document.getElementById('food-input');
    const foodInputText = parseFloat(foodInput.value);
        // foodInput.value = '';

    // ---------------- rent
    const rentInput = document.getElementById('rent-input');
    const rentInputText = parseFloat(rentInput.value);
        // rentInput.value = '';

    // -------------- clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = parseFloat(clothesInput.value);
        // clothesInput.value = '';

    // -------------Total-expenses
    const totalExpensesInput = document.getElementById('total-expenses');
    const totalExpensesAmount = parseFloat(totalExpensesInput.innerText);
    const totalCost = foodInputText + rentInputText + clothesInputText;
        totalExpensesInput.innerText = totalExpensesAmount + totalCost;
    
    // ------------------------balance
     const balanceInput = document.getElementById('balance-money');
     const balanceInputAmount = parseFloat(balanceInput.innerText);
        balanceInput.innerText = incomeInputText - totalCost;
    

})
    //----------------- Save --------------------------//

    document.getElementById('save-btn').addEventListener('click', function(){

        

        const incomeInput = document.getElementById('income-input');
        const incomeInputText = parseFloat(incomeInput.value);
        
        const saveInput = document.getElementById('save-input');
        const saveInputText = parseFloat(saveInput.value);
    
        const savingAmount = document.getElementById('saving-amount');
        // const savingAmountText = parseFloat(savingAmount.innerText);
            savingAmount.innerText = (incomeInputText * saveInputText) / 100;

           

        const balanceInput = document.getElementById('balance-money');
        const balanceInputAmount = parseFloat(balanceInput.innerText);
        // console.log()
        

        const remainingBalanceInput = document.getElementById('remaining-Balance');
        // const remainingBalanceAmount = parseFloat(remainingBalanceInput.innerText);
       
            remainingBalanceInput.innerText = balanceInputAmount - savingAmount.innerText;




        // console.log(savingAmount)
    })
