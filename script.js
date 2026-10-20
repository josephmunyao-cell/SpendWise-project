// ==========================================
// SPENDWISE - INTERACTIVE JAVASCRIPT LOGIC
// ==========================================

// Global Application State
const totalMonthlyBudget = 50000; // Fixed starting budget for tracking
let expensesArray = [];           // Array to store multiple expense records

// DOM Element References
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseListUl = document.getElementById("expense-list");

const displayBudget = document.getElementById("display-budget");
const displayTotalExpenses = document.getElementById("display-total-expenses");
const displayBalance = document.getElementById("display-balance");
const displayStatus = document.getElementById("display-status");

// Initialize Display on Load
displayBudget.textContent = totalMonthlyBudget.toFixed(2);
updateDashboard();

// Handle Form Submission via Event Listener
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Collect user input values
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    // Validate inputs
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense description and amount.");
        return;
    }

    // Create a new expense object record
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount
    };

    // Store record in the array
    expensesArray.push(newExpense);

    // Reset form fields
    expenseNameInput.value = "";
    expenseAmountInput.value = "";

    // Refresh dashboard UI and list
    updateDashboard();
});

// Function to process records using loops and update the DOM dashboard
function updateDashboard() {
    let accumulatedExpenses = 0;

    // Clear current UI list element
    expenseListUl.innerHTML = "";

    if (expensesArray.length === 0) {
        expenseListUl.innerHTML = "<li><em>No expenses added yet. Use the form above to record your spending.</em></li>";
    } else {
        // Process array records using a loop
        for (let i = 0; i < expensesArray.length; i++) {
            let currentExpense = expensesArray[i];
            accumulatedExpenses += currentExpense.amount;

            // Create list item dynamically
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span><strong>${currentExpense.name}</strong></span>
                <span>KES ${currentExpense.amount.toFixed(2)}</span>
            `;
            expenseListUl.appendChild(listItem);
        }
    }

    // Calculate remaining balance
    const remainingBalance = totalMonthlyBudget - accumulatedExpenses;

    // Update Text Content DOM properties
    displayTotalExpenses.textContent = accumulatedExpenses.toFixed(2);
    displayBalance.textContent = remainingBalance.toFixed(2);

    // Implement Conditional Decision Making for Status feedback
    if (remainingBalance < 0) {
        displayStatus.textContent = "Over Budget! Deficit detected.";
        displayStatus.className = "status-danger";
    } else if (remainingBalance < (totalMonthlyBudget * 0.2)) {
        displayStatus.textContent = "Warning: Low Balance (<20% remaining)";
        displayStatus.className = "status-warning";
    } else {
        displayStatus.textContent = "Within Budget - Healthy Finances";
        displayStatus.className = "status-good";
    }
}