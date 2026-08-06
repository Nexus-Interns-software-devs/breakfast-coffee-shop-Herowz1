const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. TODO: Define your menu object here
const menu = {
  espresso: 3000,
  latte: 4500,
  tea: 2000
};

// 2. TODO: Define your calculateTotal function here
function calculateTotal(name, quantity) {
  if (menu[name]) {
    return menu[name] * quantity;
  } else {
    return null;
  }
}

// The Ordering System
readline.question(" Welcome! What would you like to order? ", (drinkInput) => {
  
  readline.question(" How many would you like? ", (qtyInput) => {
    
    // 3. TODO: Process the inputs (clean strings, convert numbers)
    const drink = drinkInput.trim().toLowerCase();
    const quantity = parseInt(qtyInput);

    if (isNaN(quantity) || quantity <= 0) {
      console.log(" Please enter a valid quantity.");
      readline.close();
      return;
    }

    // 4. TODO: Write your If/Else logic to validate the order
    const total = calculateTotal(drink, quantity);
    if (total !== null) {
      console.log(` Your order for ${quantity} ${drink}(s) has been placed. Total: $${total} `);
    } else {
      console.log(" Sorry, we don't have that item on the menu.");
    }   


    // 5. TODO: Print the final receipt
    console.log(total)
    // Always remember to close readline!
    readline.close();
  });
});
