export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, fn) {
        if (this.events[eventName]) {
            this.events[eventName].push(fn);
        } else {
            this.events[eventName] = [fn];
        }
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return;
        this.events[eventName].forEach((fn) => {
            fn(...args);
        });
    }
}
