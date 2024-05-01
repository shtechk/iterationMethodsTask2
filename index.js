const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]


Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

let incomeTransactions = transactions.filter((transaction) => {
  if (transaction[0] == "income") return true;
});

console.log(incomeTransactions);

///

let expenseTransactions = transactions.filter((transaction) => {
  if (transaction[0] == "expense") return true;
});

console.log(expenseTransactions);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/

let incomeTotal = 0;
incomeTransactions.forEach((incomeTransaction) => {
  incomeTotal = incomeTotal + incomeTransaction[1];
});

console.log(incomeTotal);

/////

let expenseTotal = 0;
expenseTransactions.forEach((expenseTransaction) => {
  expenseTotal = expenseTotal + expenseTransaction[1];
});

console.log(expenseTotal);

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400


Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

let netTotal = incomeTotal - expenseTotal;

console.log(netTotal);

////

let arrayAboveFiveHundred = transactions.filter((transaction) => {
  if (transaction[1] > 500) return true;
});

console.log(arrayAboveFiveHundred);
