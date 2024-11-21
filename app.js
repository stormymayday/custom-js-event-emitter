import { EventEmitter } from "./variants/object-array.js";
import { EventEmitter as EventEmitterV2 } from "./variants/map-set.js";

const emitter = new EventEmitterV2();

function greet1() {
    return `Hello`;
}

function greet2(name) {
    return `Hello ${name}`;
}

emitter.once("greeting", greet1);
// emitter.on("greeting", greet2);
console.log(emitter.emit("greeting", "Joe"));
console.log(emitter);
