function Model() {
    EventEmitter.call(this);
    this._offset = 0;
    this.init();
}

// Model inherits from EventEmitter
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = Model;

Model.prototype.init = function() {
    var date = new Date();
    this._hours = date.getHours();
    this._minutes = date.getMinutes();
    this._seconds = date.getSeconds();

    setInterval(function() {
        this.changeTime();
    }.bind(this), 1000);
};

Model.prototype.changeOffset = function(offset) {
    this._offset += parseInt(offset);
    this.changeTime();
};

Model.prototype.changeTime = function() {
    this.addSecond();


    // this._date.setSeconds(this._date.getSeconds() + this._offset);
    this.emit('timeChanged'); // broadcast the event 'timeChanged'
};
/*
Model.prototype.reset = function () {
    this._offset = 0;
    this.changeTime();
};*/

Model.prototype.getHours = function() {
    return this._hours;
};

Model.prototype.getMinutes = function() {
    return this._minutes;
};

Model.prototype.getSeconds = function() {
    return this._seconds();
};

Model.prototype.addHour = function() {
    this._hours += 1;
    if (this._hours > 23) this._hours = 0;
};

Model.prototype.remHour = function() {
    this._hours -= 1;
    if (this._hours < 0) this._hours = 23;
};

Model.prototype.addMinute = function() {
    this._minutes += 1;
    if (this._minutes > 59) {
        this._minutes = 0;
        this.addHour();
    }
};

Model.prototype.remMinute = function() {
    this._minutes -= 1;
    if (this._minutes < 0) {
        this._minutes = 59;
        this.remHour();
    }
};

Model.prototype.addSecond = function() {
    this._seconds += 1;
    if (this._seconds > 59) {
        this._seconds = 0;
        this.addMinute();
    }
};

Model.prototype.remSecond = function() {
    this._seconds -= 1;
    if (this._seconds < 0) {
        this._seconds = 59;
        this.remMinute();
    }
};
