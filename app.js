import { EventEmitter } from "./variants/object-array.js";

const myEmitter = new EventEmitter();

myEmitter.on("push", () => {
    return "First listener";
});

myEmitter.on("push", (argument1) => {
    return `Second listener with ${argument1}`;
});

myEmitter.on("push", (argument1, argument2) => {
    return `Third listener with ${argument1} and ${argument2}`;
});

console.log(myEmitter.emit("push", "argument 1", "argument 2"));
