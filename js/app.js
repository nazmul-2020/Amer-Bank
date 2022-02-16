document.getElementById('cal-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = parseFloat(incomeInput.value);

    const foodInput = document.getElementById('food-input');
    const foodInputText = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentInputText = parseFloat(rentInput.value);

    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = parseFloat(clothesInput.value);

    const totalCost = foodInputText + rentInputText + clothesInputText;

    const totalExpensesInput = document.getElementById('total-expenses');
    const totalExpensesAmount = parseFloat(totalExpensesInput.innerText);
     totalExpensesInput.innerText = totalExpensesAmount + totalCost;
     
     const restMoneyInput = document.getElementById('rest-money');
     const restMoneyInputAmount = parseFloat(restMoneyInput.innerText);
     restMoneyInput.innerText = incomeInputText - totalCost;

    // console.log(totalCost)


})