---
title: JavaScript 5 ways to define a function
subtitle: There are many ways to define a function in Javascript.
createdBy: Jimmy Lin
createdAt: 2021-08-24 11:12
---

# JavaScript 5 ways to define a function

1. Function declaration

   ```jsx
   function sum(a, b) {
     return a + b;
   }
   ```

2. Function expression

   ```jsx
   const sum = function (a, b) {
     return a + b;
   };
   ```

   ```jsx
   const computer = {
     // Function expression
     sum: function (a, b) {
       return a + b;
     },
   };
   ```

3. Shorthand method definition

   ```jsx
   const computer = {
     // Shorthand method definition
     sum(a, b) {
       return a + b;
     },
   };
   ```

4. Arrow function

   ```jsx
   const sum = (a, b) => {
     return a + b;
   };
   ```

5. New function

   ```jsx
   const sum = new Function("a", "b", "return a + b");
   ```

## My points

1. Don't use `New function` because it works like a `eval`.
2. Don't use shorthand method definition because it looks similar with arrow function.
3. To be consistent, use function expression on both function and method.
4. If you don't want the `this` of function itself, use arrow function.
