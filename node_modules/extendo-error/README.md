# extendo-error
Safely and simply extend native Error with prototype chaining support

# What is it?

Allows you to extend the native Error type whilst keeping the ability to have a setable message through constructor and resolving the name correctly.

It also gives the right typings and extends all children in the chain correctly (i.e. instanceof works correctly and all functions, properties and fields are accessible).

# Why use it?

In TypeScript 2.1 a breaking change makes it more challenging to extend the Error type and also means you need to do work in every class that extends Error (Exten
See [this](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)

# How do I use it?

Install it

```
npm instal extendo-error --save
```

Import it and extend it

```typescript
import ExtendoError from "extendo-error";

class YourCustomError extends ExtendoError {
    // add whatever you like here
}
```

All done! :)