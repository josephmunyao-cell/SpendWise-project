# SpendWise - Personal Budget Tracker

## Description
**SpendWise** is a personal financial management web application that transforms user financial inputs into structured budgeting insights. This core foundation implements interactive data processing, expense accumulation, remaining balance calculations, and budget utilization analysis.

## JavaScript Concepts Implemented
- **Variables & Data Types**: Utilized `const` and `let` to store numbers, strings, and booleans.
- **User Input Collection**: Collected financial input dynamically using window prompt dialogs.
- **Data Conversion & Sanitization**: Converted string input into numerical float values using `parseFloat()` and `isNaN()` validation.
- **Arithmetic Calculations**: Computed sum total expenses, remaining net balance, and budget usage percentages.
- **Reusable Functions**: Modularized program logic into custom functions to keep code maintainable and DRY (*Don't Repeat Yourself*).
- **DOM Integration & Console Output**: Output formatted metrics to both the browser developer console and HTML container elements.

## How Variables Are Used
- **`const`**: Applied to immutable budget calculations such as `totalBudget`, `rentExpense`, `totalExpenses`, and `remainingBalance`.
- **`let`**: Used for input values captured directly from user prompts prior to numeric parsing.

## How User Input Is Collected
Inputs are captured using native browser `prompt()` prompts for monthly income/budget, housing costs, food, and utilities.

## How Calculations Are Performed
1. **Total Expenses**: `totalExpenses = rentExpense + foodExpense + utilitiesExpense`
2. **Remaining Balance**: `remainingBalance = calculateBalance(totalBudget, totalExpenses)`
3. **Budget Usage**: `budgetUsedPercent = (totalExpenses / totalBudget) * 100`

## Reusable Functions Overview
- `parseInputNumber(input, fallbackValue)`: Sanitizes string inputs to prevent `NaN` arithmetic bugs.
- `calculateBalance(totalBudget, totalExpenses)`: Computes available net funds after total expenditure.
- `calculateUsagePercentage(totalExpenses, totalBudget)`: Calculates total spending percentage relative to monthly income.
- `runSpendWise()`: Orchestrates user input collection, function invocations, console output logging, and DOM updates.