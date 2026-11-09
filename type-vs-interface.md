# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript uses both `type` aliases and `interface` to describe the shape of data. When we see them, they may look almost same because both can define an object’s properties. But they have a few important differences that help us to decide which one and when to use them.

## Main Differences

An **interface** is mainly used to describe the structure of an object. For example:

```ts
interface ICourse {
  title: string;
  students: number;
  isPublished: boolean;
}
```

A **type alias** can describe an object too, but it can also represent other types, such as unions, primitives, tuples etc.

```ts
type TCourse = {
  title: string;
  students: number;
  isPublished: boolean;
};

type TStatus = "active" | "inactive";

type TCoordinateAndLocationName = readonly [number, number, string];
```

Another difference is that interfaces can be extended with `extends` but types can combine types using intersections `&`. Both of them allow us to reuse existing definitions.

Interfaces also support declaration merging. This means that if we declare the same interface more than once, TypeScript combines their properties. Type aliases do not support this behavior.

## When Should You Choose One?

Use an **interface** when describing objects or class structures, especially when you may need to extend or merge them later. Choose a **type** when you need unions, tuples, primitive aliases, or more flexible type combinations.

## Conclusion

Both options are useful, and neither is always better. For simple object shapes, either works well. The best choice depends on what you are describing and how you expect your code to do.
