// ==========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ==========================================

console.log("SpendWise JavaScript initialized successfully.");

// Function 1: Convert user input string into a valid number
function parseInputNumber(input, fallbackValue = 0) {
    let parsed = parseFloat(input);
    if (isNaN(parsed) || parsed < 0) {
        return fallbackValue;
    }
    return parsed;
}

// Function 2: Calculate remaining balance
function calculateBalance(totalBudget, totalExpenses) {
    return totalBudget - totalExpenses;
}

// Function 3: Calculate percentage of budget used
function calculateUsagePercentage(totalExpenses, totalBudget) {
    if (totalBudget <= 0) return 0;
    return (totalExpenses / totalBudget) * 100;
}

// Main interactive function to prompt user and process financial data
function runSpendWise() {
    console.log("--- Starting SpendWise Calculation ---");

    // Collecting User Input via Prompts
    let userMonthlyIncome = prompt("Enter your total monthly budget/income:", "50000");
    let userRentExpense = prompt("Enter your housing/rent expenses:", "15000");
    let userFoodExpense = prompt("Enter your food/groceries expenses:", "8000");
    let userUtilitiesExpense = prompt("Enter your utilities & bills expenses:", "4000");

    // Storing and Parsing Application Data into Numbers
    const totalBudget = parseInputNumber(userMonthlyIncome, 0);
    const rentExpense = parseInputNumber(userRentExpense, 0);
    const foodExpense = parseInputNumber(userFoodExpense, 0);
    const utilitiesExpense = parseInputNumber(userUtilitiesExpense, 0);

    // Performing Budget Calculations
    const totalExpenses = rentExpense + foodExpense + utilitiesExpense;
    const remainingBalance = calculateBalance(totalBudget, totalExpenses);
    const budgetUsedPercent = calculateUsagePercentage(totalExpenses, totalBudget);

    // Display Results in Console with Clear Labels
    console.log(`Total Monthly Budget: KES ${totalBudget.toFixed(2)}`);
    console.log(`Total Expenses Breakdown:`);
    console.log(`  - Rent: KES ${rentExpense.toFixed(2)}`);
    console.log(`  - Food: KES ${foodExpense.toFixed(2)}`);
    console.log(`  - Utilities: KES ${utilitiesExpense.toFixed(2)}`);
    console.log(`Total Calculated Expenses: KES ${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Balance: KES ${remainingBalance.toFixed(2)}`);
    console.log(`Budget Used: ${budgetUsedPercent.toFixed(1)}%`);

    if (remainingBalance < 0) {
        console.warn("Warning: You are over budget!");
    } else {
        console.log("Great job! You are within your budget limits.");
    }

    // Display Results on Webpage Document
    const displayDiv = document.getElementById("output-display");
    if (displayDiv) {
        displayDiv.innerHTML = `
            <p><strong>Total Monthly Budget:</strong> KES ${totalBudget.toFixed(2)}</p>
            <p><strong>Total Calculated Expenses:</strong> KES ${totalExpenses.toFixed(2)}</p>
            <p><strong>Remaining Balance:</strong> KES ${remainingBalance.toFixed(2)}</p>
            <p><strong>Budget Utilization:</strong> ${budgetUsedPercent.toFixed(1)}%</p>
            <p><em>Status: ${remainingBalance < 0 ? "<span style='color:red;'>Over Budget</span>" : "<span style='color:green;'>Within Budget</span>"}</em></p>
        `;
    }
}