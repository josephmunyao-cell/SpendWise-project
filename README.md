# SpendWise - Interactive Budget Tracker

## Description
**SpendWise** is an interactive web application designed to help users track personal finances. This version introduces dynamic UI updates, user form interactions, array-based record collection, loop processing, and conditional financial evaluation.

## Improvements Made This Week
- Replaced basic window prompts with a clean HTML input form.
- Upgraded data handling from isolated variables to a dynamic JavaScript array (`expensesArray`).
- Implemented loop iteration (`for` loops) to process multiple expenses and compute accumulated spending.
- Added real-time DOM manipulation to update dashboard metrics and render list items instantly without reloading the page.

## How Conditionals Are Used
Conditional statements (`if`, `else if`, `else`) evaluate the user's remaining balance against their total monthly budget. Based on the evaluation, the application dynamically updates financial health statuses (`Within Budget`, `Warning: Low Balance`, or `Over Budget`).

## How Arrays Are Used to Store Data
Instead of individual variables for each item, an array (`expensesArray`) stores structured expense objects containing unique IDs, names, and numeric amounts. This allows the application to dynamically scale as users add or accumulate records.

## How the DOM Is Updated
JavaScript DOM methods (`document.getElementById`, `document.createElement`, and `.textContent`) are used to read user inputs, inject dynamic list elements into the UI, and live-update financial metrics in the dashboard container.

## How User Interactions Are Handled Through Events
An `addEventListener` listens for form submission events (`submit`). When clicked, it intercepts default browser reloads, sanitizes input data, pushes new records into the data array, and triggers dashboard re-calculations.

## Challenges Encountered and Solutions
- **Challenge:** Preventing negative or text-based inputs from throwing calculation errors.  
- **Solution:** Implemented type validation (`isNaN()`, `parseFloat()`, and conditional range checks) to ensure only valid numbers are processed.
- **Challenge:** Managing state when rendering dynamic lists.  
- **Solution:** Cleared the container's inner HTML prior to looping through the array to prevent duplicate rendering entries.