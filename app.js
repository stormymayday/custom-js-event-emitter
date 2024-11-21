import { EventEmitter } from "./variants/object-array.js";

const myEmitter = new EventEmitter();

function listener1() {
    return "Listener 1";
}
function listener2(param) {
    return `Listener 2: ${param} `;
}
function listener3(param1, param2) {
    return `Listener 3: ${param1}, ${param2} `;
}
myEmitter.on("push", listener1);
myEmitter.on("push", listener2);
myEmitter.on("push", listener3);

console.log(myEmitter);

myEmitter.off("push", listener2);

console.log(myEmitter);

console.log(myEmitter.emit("push", "argument 1", "argument 2"));
