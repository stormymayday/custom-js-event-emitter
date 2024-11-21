import { EventEmitter } from "./variants/object-array.js";

const myEmitter = new EventEmitter();

myEmitter.on("click", () => {
    console.log(`Click event occurred`);
});

myEmitter.on("push", () => {
    console.log(`Push event occurred`);
});

myEmitter.on("push", (argument1) => {
    console.log(`Push event with argument:${argument1} occurred`);
});

// console.log(myEmitter);
console.log(myEmitter.emit("push", "argument1"));
// console.log(myEmitter.emit("click", "argument1"));
