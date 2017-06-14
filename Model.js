function Model() {
    EventEmitter.call(this);
    this._offset = 0;
    this.init();
}

// Model inherits from EventEmitter
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = Model;

Model.prototype.init = function() {
    setInterval(function() {
        this.changeTime();
    }.bind(this), 1000);
};

Model.prototype.changeOffset = function(offset) {
    this._offset += parseInt(offset);
    this.changeTime();
};

Model.prototype.changeTime = function() {
    this._date = new Date();
    this._date.setSeconds(this._date.getSeconds() + this._offset);
    this.emit('timeChanged'); // broadcast the event 'timeChanged'
};

Model.prototype.reset = function () {
    this._offset = 0;
    this.changeTime();
};

Model.prototype.getHours = function() {
    return this._date.getHours();
};

Model.prototype.getMinutes = function() {
    return this._date.getMinutes();
};

Model.prototype.getSeconds = function() {
    return this._date.getSeconds();
};
