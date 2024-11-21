import { EventEmitter } from "./variants/object-array.js";

const myEmitter = new EventEmitter();

myEmitter.on("click", () => {
    console.log(`lol`);
});

myEmitter.on("push", () => {
    console.log(`lol`);
});

myEmitter.on("push", () => {
    console.log(`rofl`);
});

console.log(myEmitter);
