function calculateTripCost() {
    var days = parseInt(document.getElementById('days').value);
    var people = parseInt(document.getElementById('people').value);
    var budgetPerDay = 10000; // фіксований бюджет на день на одну людину в йенах
    var totalCost = days * people * budgetPerDay;
    document.getElementById('result').innerHTML = 'Загальна вартість вашої подорожі до Японії становить: ' + totalCost.toFixed(2) + ' йенах';
}
