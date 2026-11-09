# Understanding Access Modifiers in TypeScript OOP

## Introduction

In OOP a class often contains data and methods that should not all be available to everyone for security purposes. TypeScript uses access modifiers to control where class members can be accessed. The main modifiers are `public`, `private`, and `protected`. It also provides `readonly` which prevents a property from being reinitialized.

## How They Work

`public` is the default modifier. So members can be used both inside and outside the class. `private` limits access to the class only. `protected` is similar but child classes can also use that member. `readonly` is different. It does not hide a property. It only stops its value from reinitialization.

```ts
class Employee {
  constructor(
    public name: string,
    private baseSalary: number,
    protected department: string,
    public readonly employeeId: number,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

class Manager extends Employee {
  getDepartment(): string {
    return this.department; // Allowed: department is protected
  }
}

const employee = new Employee("Rafi", 40000, "IT", 101);

// employee.name;                // Allowed: public
// employee.baseSalary;         // Error: private
// employee.department;        // Error: protected
// employee.employeeId = 102; // Error: readonly
```

In this example, `name` can be accessed from anywhere but `baseSalary` stays inside `Employee`. The `Manager` class can access `department` because it inherits from `Employee`. The employee id can be read but it cannot be reassigned.

## Conclusion

Use `public` for values for openly available, `private` for internal class details and `protected` when subclasses need access. Choose `readonly` for values that set for once and then remain unchanged. These modifiers make class code easier to maintain and help prevent security flows and accidental changes.
