export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [fn];
        } else {
            this.events[eventName].push(fn);
        }
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return [];
        return this.events[eventName].map((fn) => {
            return fn(...args);
        });
    }

    off(eventName, fn) {
        if (!this.events[eventName]) return;
        this.events[eventName] = this.events[eventName].filter((el) => {
            return el !== fn;
        });
    }

    once(eventName, fn) {
        const onceWrapper = (...args) => {
            fn(...args);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }
}
