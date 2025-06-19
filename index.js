// 1. Declare customerName to be 'bob' in the global scope
var customerName = 'bob';

// 2. Write a function that uppercases the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Set the best customer (should become a global variable)
function setBestCustomer() {
  bestCustomer = 'not bob'; // don't use var/let/const so it's global
}

// 4. Overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant and try to change it (expected to throw error in test)
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This should fail intentionally
}

