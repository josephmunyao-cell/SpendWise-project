document.addEventListener('DOMContentLoaded', () => {
    const budgetForm = document.getElementById('budget-form');
    const budgetInput = document.getElementById('budget-input');
    
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    
    const displayBudget = document.getElementById('display-budget');
    const displayTotalExpenses = document.getElementById('display-total-expenses');
    const displayBalance = document.getElementById('display-balance');
    const displayStatus = document.getElementById('display-status');

    // Load saved budget and expenses from localStorage
    let monthlyBudget = parseFloat(localStorage.getItem('spendwise_budget')) || 0;
    let expenses = JSON.parse(localStorage.getItem('spendwise_expenses')) || [];

    // Pre-fill input if budget exists
    if (monthlyBudget > 0) {
        budgetInput.value = monthlyBudget;
    }

    updateDashboard();
    renderExpenses();

    // Handle Budget Form Submission
    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newBudget = parseFloat(budgetInput.value);

        if (isNaN(newBudget) || newBudget < 0) return;

        monthlyBudget = newBudget;
        localStorage.setItem('spendwise_budget', monthlyBudget);
        updateDashboard();
    });

    // Handle Expense Form Submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value);

        if (!name || isNaN(amount) || amount <= 0) return;

        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        };

        expenses.push(newExpense);
        saveAndRefresh();

        // Clear input fields
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
        expenseNameInput.focus();
    });

    // Remove expense function
    window.deleteExpense = function(id) {
        expenses = expenses.filter(expense => expense.id !== id);
        saveAndRefresh();
    };

    function saveAndRefresh() {
        localStorage.setItem('spendwise_expenses', JSON.stringify(expenses));
        renderExpenses();
        updateDashboard();
    }

    // Render list items
    function renderExpenses() {
        expenseList.innerHTML = '';

        if (expenses.length === 0) {
            expenseList.innerHTML = `<li><em>No expenses added yet. Use the form above to record your spending.</em></li>`;
            return;
        }

        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${escapeHTML(expense.name)}</strong> - KES ${expense.amount.toFixed(2)}</span>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    // Update dashboard calculations and indicators
    function updateDashboard() {
        const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
        const remainingBalance = monthlyBudget - totalExpenses;

        displayBudget.textContent = monthlyBudget.toFixed(2);
        displayTotalExpenses.textContent = totalExpenses.toFixed(2);
        displayBalance.textContent = remainingBalance.toFixed(2);

        // Update Budget Status and styles
        if (monthlyBudget === 0) {
            displayStatus.textContent = 'Please set your monthly budget';
            displayStatus.className = 'status-warning';
        } else if (remainingBalance < 0) {
            displayStatus.textContent = 'Over Budget!';
            displayStatus.className = 'status-danger';
        } else if (remainingBalance < monthlyBudget * 0.2) {
            displayStatus.textContent = 'Warning: Low Balance';
            displayStatus.className = 'status-warning';
        } else {
            displayStatus.textContent = 'Within Budget - Healthy Finances';
            displayStatus.className = 'status-good';
        }
    }

    // Basic HTML sanitizer for security
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});