// Step 1: Create two arrays of numbers called numbers1 and numbers2
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// Step 2: Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2
const numbers = [...numbers1, ...numbers2];

// Step 3: Define an arrow function called square that accepts a number as an argument and returns the square of the number
const square = num => num * num;

// Step 4: Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array
const squares = numbers.map(square);

// Step 5: Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false
const isEven = num => num % 2 === 0;

// Step 6: Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array
const evenSquares = squares.filter(isEven);

// Step 7: Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare
const [firstEvenSquare, secondEvenSquare] = evenSquares;