function Model() {
    EventEmitter.call(this);
    this.init();
}

Model.prototype.init = function() {

};

Model.prototype.addHour = function() {
    emit('hourChanged');
};