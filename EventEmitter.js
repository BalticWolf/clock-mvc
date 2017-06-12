function EventEmitter() {
    this._events = {};
}

EventEmitter.prototype.on = function(eventName, fn) {
    this._events[eventName] = this._events[eventName] || [];
    this._events[eventName].push(fn);
};

EventEmitter.prototype.off = function(eventName, fn) {
    if (this._events[eventName]) {
        for (var i = 0; i < this._events[eventName].length; i++) {
            if (this._events[eventName][i] === fn) {
                this._events[eventName].splice(i, 1);
                break;
            }
        }
    }
};

EventEmitter.prototype.emit = function(eventName, data) {
    if (this._events[eventName]) {
        this._events[eventName].forEach(function(fn) {
            fn(data);
        });
    }
};
