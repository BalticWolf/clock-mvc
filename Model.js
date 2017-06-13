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
    var hours = this._date.getHours();
    return hours < 10 ? '0' + hours : hours; // display on 2 digits
};

Model.prototype.getMinutes = function() {
    var minutes = this._date.getMinutes();
    return minutes < 10 ? '0' + minutes : minutes; // display on 2 digits
};

Model.prototype.getSeconds = function() {
    var seconds = this._date.getSeconds();
    return seconds < 10 ? '0' + seconds : seconds; // display on 2 digits
};
