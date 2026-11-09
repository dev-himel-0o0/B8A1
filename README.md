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

### Problem 3: `formatCoordinate`

For this problem, the goal was to take a coordinate and location name tuple containing `[latitude, longitude, locationName]` `([number, number, string])` and return a formatted string like `"Location: Dhaka (23.81, 90.41)"`, the requirement says to apply the `readonly` modifier to the `tuple` parameter so it cannot be `mutated` inside the function 🙂.

```ts
type TCoordinateAndLocationName = readonly [number, number, string];

const formatCoordinate = (locationData: TCoordinateAndLocationName): string => {
  const [latitude, longitude, locationName] = locationData;
  return `Location: ${locationName} (${latitude},${longitude})`;
};
```

**Key details and edge cases handled:**

- **Why `readonly` tuple type (`TCoordinateAndLocationName`) is used:** Adding `readonly` before `[number, number, string]` locks the `tuple` structure so that the fixed order and types are strictly checked, and any accidental changes inside the function (like reassigning an index or using `.push()` or something like that) are blocked by `TypeScript` 😊.
- **Why destructuring and template literals are used:** Destructuring `const [latitude, longitude, locationName] = locationData` makes it easy to place `latitude, longitude, locationName` all these where ever I want to formate the string. Using a template literal also keeps the exact decimal values and automatically turns `-0` into `"0"` 👌.

### Problem 4: `concatenateArrays`

For this problem, the goal was to create a generic function `concatenateArrays` that takes multiple arrays of the same type `T` using rest parameters (`...arrays: T[][]`) and merges them into a single array in the exact order they were passed 🙂.

```ts
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};
```

**Key details and edge cases handled:**

- **Why `<T>` and rest parameters (`...arrays: T[][]`) are used:** The problem statement itself tells to use same type `T` using rest parameters `(...arrays: T[][])`. So, by using `<T>` makes sure that all arrays passed into the function are exact same type of items without using `any` as the requirement says not to use `any` type.What the rest parameter is doing it collects all the separate array arguments into a single 2D array (`T[][]`) and also handles the cases where only one array, empty arrays, or even zero arguments are passed in to the function 😊.
- **Why `arrays.flat()` is used:** The `flat()` method combines nested arrays into a single array by removing one level of nesting. What the problem statement is telling us to do the `flat()` method is the perfect method to solve this kind of problem without using any kind of manual effort 👌.

### Problem 5: `getPopularCourses`

For this problem, the goal was to define a `Course` interface and create a function `getPopularCourses` that takes an array of courses and a `minStudents` number, then returns a new array with only the courses that are published and have at least `minStudents` without `mutating` the original array 🙂.

```ts
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};
```

**Key details and edge cases handled:**

- **Why `interface Course` is used:** The problem statement specifically asked to define a `Course` interface with `title`, `students`, and `isPublished`. Using `Course[]` for both the `courses` parameter and the return type makes sure every course object has the exact same types 😊.
- **Why `.filter()` used:** The `.filter()` method automatically creates and returns a brand-new array without `mutating` the original `courses` array, which fulfil the requirement not to `mutate` the original input array 👌.
