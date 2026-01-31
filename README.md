
# MERN Assessment – Repo: test1

This repository contains solutions to a series of JavaScript and front-end development problem statements designed to test DOM manipulation, array operations, closures, and layout creation using HTML/CSS.

---

## 📌 Problem Statements

### Problem Statement 1: Create Student List Using DOM Manipulation
You are given an HTML `<div>` element:
```html
<div id="container"></div>
```
**Tasks:**
1. Select the `<div>` with the id `container`.
2. Create a `<ul>` element dynamically and append it inside the given `<div>`.
3. Create at least three `<li>` elements inside the `<ul>`.
4. Each `<li>` should display a student’s name and marks in the format:  
   `Student Name – Marks`
5. Change the background color of each list item using JavaScript DOM manipulation.

---

### Problem Statement 2: Dynamic Heading Manipulation Using JavaScript
You are given:
```html
<h1 id="heading"></h1>
```
**Tasks:**
1. Select the `<h1>` element using its id.
2. Add meaningful text dynamically using JavaScript.
3. Change the text color of the heading.
4. Change the background color of the heading.
5. Align the heading text to the center.
6. Add a CSS class (e.g., `main-heading`) using `classList`.
7. On page load, display:  
   `"Welcome to JavaScript DOM Manipulation"`

---

### Problem Statement 3: Array Transformation
Write a JavaScript function that iterates through an array of integers:
- If the number is even → replace it with its square (`n^2`).
- If the number is odd → keep it unchanged.

**Example:**
```js
Input:  [2, 3, 4, 5, 6]
Output: [4, 3, 16, 5, 36]
```

---

### Problem Statement 4: Shopping Cart Sorting
You are given an array of objects representing a shopping cart:
```js
const shoppingCart = [
  { itemName: "Wireless Mouse", itemPrice: 25 },
  { itemName: "Gaming Monitor", itemPrice: 300 },
  { itemName: "USB-C Cable", itemPrice: 15 },
  { itemName: "Mechanical Keyboard", itemPrice: 120 },
  { itemName: "Webcam", itemPrice: 85 }
];
```
**Task:** Sort items in ascending order based on `itemPrice`.

**Output:**
```js
[
  { itemName: "USB-C Cable", itemPrice: 15 },
  { itemName: "Wireless Mouse", itemPrice: 25 },
  { itemName: "Webcam", itemPrice: 85 },
  { itemName: "Mechanical Keyboard", itemPrice: 120 },
  { itemName: "Gaming Monitor", itemPrice: 300 }
]
```

---

### Problem Statement 5: Filter Active Premium Users
Process an array of user objects and return only those who:
1. Have `isActive = true`
2. Have `membership = "premium"`

**Example:**
```js
Input:
const users = [
  { id: 1, name: "Alice", isActive: true, membership: "premium" },
  { id: 2, name: "Bob", isActive: false, membership: "premium" },
  { id: 3, name: "Charlie", isActive: true, membership: "basic" },
  { id: 4, name: "David", isActive: true, membership: "premium" },
  { id: 5, name: "Eve", isActive: false, membership: "basic" }
];

Output:
[
  { id: 1, name: "Alice", isActive: true, membership: "premium" },
  { id: 4, name: "David", isActive: true, membership: "premium" }
]
```

---

### Problem Statement 6: Hoisting & Scope
```js
console.log(a);
console.log(b);
var a = 10;
let b = 20;
function test() {
  console.log(c);
  var c = 30;
}
test();
```

**Tasks:**
1. Predict the output.
2. Explain:
   - Why `a` prints `undefined`
   - Why `b` throws an error
   - Why `c` is `undefined` inside the function
3. Identify the error line.
4. Bonus: Rewrite code so no error occurs and all logs print valid values.

---

### Problem Statement 7: Counter Using Closure
Write a function that:
1. Initializes counter at `0`.
2. Increments value by `1` each time `increment()` is called.
3. Prevents direct access to counter value.
4. Preserves value between calls.

---

### Problem Statement 8: Function Hoisting
```js
sayHello();
function sayHello() {
  console.log("Hello");
}
sayHi();
var sayHi = function () {
  console.log("Hi");
};
```

**Task:** Predict output and explain why.

---

### Problem Statement 9: Product Card Layout
Using **HTML & CSS**, recreate the given product card design.

---

### Problem Statement 10: User Profile Card
Using **HTML & CSS**, create a profile card with:
- Profile picture
- User name
- Short bio
- Three info sections (Posts, Followers, Following)
- Primary action button (e.g., Follow)

**Requirements:**
- Centered card with rounded corners
- Balanced spacing & alignment
- Hover effects on card/button
- Responsive design for smaller screens

---

## 🚀 Solutions
All solutions are implemented using **JavaScript, HTML, and CSS**.  
Check the respective files in this repository for detailed implementations.

---

## 📝 Author
Developed as part of the **MERN Assessment** project.
