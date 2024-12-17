Here are **five harder exercises** to help you push your ES6 skills further:

---

### **Exercise 1: Nested Destructuring and Rest Operator**

You have the following nested object that contains data for a user:

```javascript
const user = {
  id: 101,
  name: "John Doe",
  address: {
    city: "New York",
    postalCode: "10001",
  },
  scores: [80, 90, 100],
};
```

1. Use **nested destructuring** to extract:
   - `name`
   - `city` (from `address`)
   - The last score from the `scores` array using the **rest operator**.

2. Print the extracted values.

---

### **Exercise 2: Arrow Functions and Chaining Array Methods**

You have an array of products:

```javascript
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Headphones", price: 200 },
];
```

1. Write an **arrow function** to filter out products that cost more than **$500**.
2. Use **`map`** to create a new array containing only the names of these filtered products.
3. Chain the methods together.

Expected Output:
```javascript
["Laptop", "Phone", "Tablet"]
```

---

### **Exercise 3: Spread Operator with Objects and Arrays**

You are given two objects and one array:

```javascript
const userDetails = { name: "Alice", age: 28 };
const jobDetails = { role: "Developer", company: "Tech Co." };
const hobbies = ["Reading", "Gaming", "Hiking"];
```

1. Create a new object `userProfile` nested destructuringthat merges `userDetails` and `jobDetails` using the **spread operator**.
2. Add a **new property** called `hobbies` to `userProfile` that uses the `hobbies` array.
3. Add `"Coding"` to the `hobbies` list **without modifying the original array**.

Expected Output:
```javascript
{
  name: "Alice",
  age: 28,
  role: "Developer",
  company: "Tech Co.",
  hobbies: ["Reading", "Gaming", "Hiking", "Coding"]
}
```

---

### **Exercise 4: Promises and `async/await`**

Create a function `fetchUserData` that simulates fetching user data from a server.

1. Use a **Promise** to simulate a delay of 2 seconds. After the delay:
   - If a `userId` is provided, resolve with an object `{ id: userId, name: "John Doe" }`.
   - If no `userId` is provided, reject with `"No user ID provided"`.

2. Create an **`async` function** called `getUser` that:
   - Calls `fetchUserData` with a given `userId`.
   - Handles both the resolved and rejected outcomes using `try...catch`.

Example Call:
```javascript
getUser(123); // Should log: { id: 123, name: "John Doe" }
getUser();    // Should log: No user ID provided
```

---

### **Exercise 5: Map, Set, and Custom Classes**

1. Create a **class** `Student` with:
   - A constructor that takes `name` and `grades` (an array).
   - A method `averageGrade()` that calculates the average of the grades.

2. Create a **Set** of unique `Student` objects. You should ensure:
   - The `Set` can store multiple students with unique names only.

3. Use a **Map** to store each student’s name and their average grade.

Example:
```javascript
const student1 = new Student("Alice", [85, 90, 78]);
const student2 = new Student("Bob", [88, 76, 92]);
const student3 = new Student("Alice", [90, 95, 100]); // Duplicate name

// Your logic here
```

Expected Output:
```javascript
Set: [Student("Alice", [85, 90, 78]), Student("Bob", [88, 76, 92])]
Map: { "Alice" => 84.33, "Bob" => 85.33 }
```

---

### **Summary of Skills Covered**  
These exercises will help you practice and combine advanced ES6 features, such as:  
- **Nested destructuring**  
- **Chaining array methods**  
- **Spread operator** with objects and arrays  
- **Promises** with `async/await`  
- Custom **classes** with `Set` and `Map` usage  

Let me know if you'd like detailed solutions for any exercise! 🚀nested destructuring