function Model() {
    EventEmitter.call(this);
    this._offset = 0;
    this.init();
}

Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = Model;

Model.prototype.init = function() {
    var self = this;
    setInterval(function() {
        self.changeTime();
    }, 1000);
};

Model.prototype.changeOffset = function(offset) {
    this._offset += parseInt(offset);
    this.changeTime();
};

Model.prototype.changeTime = function() {
    this._date = new Date();
    this._date.setSeconds(this._date.getSeconds() + this._offset);
    this.emit('timeChanged');
};

Model.prototype.getHours = function() {
    var hours = this._date.getHours();
    return hours < 10 ? '0' + hours : hours;
};

Model.prototype.getMinutes = function() {
    var minutes = this._date.getMinutes();
    return minutes < 10 ? '0' + minutes : minutes;
};

Model.prototype.getSeconds = function() {
    var seconds = this._date.getSeconds();
    return seconds < 10 ? '0' + seconds : seconds;
};
