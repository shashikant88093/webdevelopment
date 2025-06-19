# What is interface in TypeScript?
- Interface in TypeScript is a way to define the structure of an object, specifying the properties and their types. It allows for type-checking and ensures that objects conform to a specific shape.
- It can be used to define contracts for classes, ensuring they implement certain methods and properties.
- Interfaces can extend other interfaces, allowing for more complex type definitions.
[]: # 
[]: # ```ts
[]: # let x = 10; // TypeScript infers x as number
[]: # ```
[]: # 
[]: # ---
[]: # 
[]: # ## 🧭 Related Principles:
[]: # 
[]: # * **KISS** (Keep It Simple, Stupid): Write simple and clear code.
[]: # * **DRY** (Don’t Repeat Yourself): Avoid code duplication.
[]: # * **SOLID**: A set of principles for object-oriented design.
[]: # 
[]: # ---
[]: # 
[]: # ## ✅ Summary
[]: # 
[]: # | Concept    | Description                                                                   |
[]: # | ---------- | ----------------------------------------------------------------------------- |
[]: # | Interface  | Defines the structure of an object, ensuring type safety and clarity.         |
[]: # | Type       | A way to define custom types, including unions, intersections, and more.      |
[]: # | TypeScript | A superset of JavaScript that adds static typing and interfaces.               |

# What is example of interface in TypeScript?
- An example of an interface in TypeScript is as follows:
```ts
interface User {
  id: number;
  name: string;
  email: string;
}
const user: User = {
  id: 1,
  name: "Alice",
  email: ""
};

