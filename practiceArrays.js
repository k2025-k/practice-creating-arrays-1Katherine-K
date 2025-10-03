//Tasks
// Task 1: Create Arrays
// Create two separate arrays using array literals for the following:
// An array of 5 grocery store items.
// An array of 3 numbers representing prices.
// Task 2: Access and Log the Value
// Use console.log() to log the arrays.
// 1. Log the entire array of grocery items.
// 2. Log the entire array of prices.
// 3. Log three individual items of your choice.
// 4. Log two prices of your choice.

let groceryList=["Apples", "Chocolate", "Cheddar", "Lettuce", "Sugar"];
let groceryPrice=["3.99", "6.47", "3.62"];
console.log(groceryList);
console.log(groceryPrice);
let item;
for (let i = 2 ; i < groceryList.length;i++) {//Output the starting at element 3 until end of array
    console.log(groceryList[i]); //More easily could have done at below with just indexing
    }
console.log(groceryPrice[0]); //Output specifc element at index 0 in array groceryPrice
console.log(groceryPrice[1]);//Output specifc element at index 1 in array groceryPrice