export class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(eventName, listener) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Set());
        }
        this.events.get(eventName).add(listener);
    }

    emit(eventName, ...args) {
        if (!this.events.has(eventName)) return [];
        return [...this.events.get(eventName)].map((listener) => {
            return listener(...args);
        });
    }
}
