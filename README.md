# B8A1

🚀 Next Level 🤖 Mission_01 🎯 Assignment_01 🧑‍💻

### Problem 1: `multiplyValue`

For this problem, the goal was to create a function `multiplyValue` that accepts a number `value` and an optional number `multiplier` also need to handle `0` properly when passed as `multiplier` (multiplying by `0` must return `0`) 🙂.

At first, I wrote it using an optional parameter (`multiplier?: number`) and checked for `undefined` manually inside the function 😊:

```ts
const multiplyValue = (value: number, multiplier?: number): number => {
  if (typeof multiplier !== "undefined") return value * multiplier + 0;
  return value * 2 + 0;
};
```

After observing the solution I found out that when we use `default parameter` in `typescript` it automatically handles the `undefined` and make the `argument` optional. Also as I am setting the `default value` i don't need the type check and also don't need to return twice with the almost same calculation 🤔.

Because of that, I have simplified my final solution to a clean one-liner 😁:

```ts
const multiplyValue = (value: number, multiplier: number = 2): number =>
  value * multiplier + 0;
```

I also added `+ 0` at the end so that if a negative number is multiplied by `0` (like `multiplyValue(-7, 0)`), it returns a normal `0` instead of JavaScript's `-0` 👌.

### Problem 2: `processInput`

For this problem, the problem statement specifically says to write the union types for both the function parameter and the return type. So, I declared two separate union type aliases: `TValue` (`string | number | boolean`) for the input parameter and `TReturnValue` (`string | number`) for the return value 😊.

```ts
type TValue = string | number | boolean;
type TReturnValue = string | number;

const processInput = (value: TValue): TReturnValue => {
  if (typeof value === "string") return value.trim().toLowerCase();
  if (typeof value === "number") return value * 10 + 0;
  return value ? "Active" : "Inactive";
};
```

**Key details and edge cases handled:**

- **Why `+ 0` is used for numbers:** Just like in **Problem 1**, I added `+ 0` so that if `-0` is passed in, it returns a normal `0` instead of `-0` 😉.
- **Why there is no third `if` check:** Since `value` can only be a `string`, `number`, or `boolean`, after checking the first two types, TypeScript already knows the last one must be a `boolean`. So I don't need another `if` check and can just use a simple ternary (`value ? "Active" : "Inactive"`) 😁.
