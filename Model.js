function Model() {
    EventEmitter.call(this);
    this.init();
}

// Model inherits from EventEmitter
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = Model;

Model.prototype.init = function() {
    this.reset();

    setInterval(function() {
        this.addSecond();
    }.bind(this), 1000);
};

Model.prototype.reset = function () {
    var date = new Date();

    this._hours = date.getHours();
    this._minutes = date.getMinutes();
    this._seconds = date.getSeconds();

    this.emit('timeChanged');
};

Model.prototype.getHours = function() {
    return this._hours;
};

Model.prototype.getMinutes = function() {
    return this._minutes;
};

Model.prototype.getSeconds = function() {
    return this._seconds;
};

Model.prototype.addHour = function() {
    this._hours += 1;
    if (this._hours > 23) this._hours = 0;

    this.emit('timeChanged');
};

Model.prototype.remHour = function() {
    this._hours -= 1;
    if (this._hours < 0) this._hours = 23;

    this.emit('timeChanged');
};

Model.prototype.addMinute = function() {
    this._minutes += 1;
    if (this._minutes > 59) {
        this._minutes = 0;
        this.addHour();
    }

    this.emit('timeChanged');
};

Model.prototype.remMinute = function() {
    this._minutes -= 1;
    if (this._minutes < 0) {
        this._minutes = 59;
        this.remHour();
    }

    this.emit('timeChanged');
};

Model.prototype.addSecond = function() {
    this._seconds += 1;
    if (this._seconds > 59) {
        this._seconds = 0;
        this.addMinute();
    }

    this.emit('timeChanged');
};

Model.prototype.remSecond = function() {
    this._seconds -= 1;
    if (this._seconds < 0) {
        this._seconds = 59;
        this.remMinute();
    }

    this.emit('timeChanged');
};
