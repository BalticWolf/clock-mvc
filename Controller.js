function Controller(model, view) {
    this._model = model;
    this._view = view;

    // each time the event 'offsetClick' is triggered by the view,
    // the controller runs handleOffset
    this._view.on('addHour', this.handleAddHour.bind(this));
    this._view.on('remHour', this.handleRemHour.bind(this));
    this._view.on('addMinute', this.handleAddMinute.bind(this));
    this._view.on('remMinute', this.handleRemMinute.bind(this));
    this._view.on('addSec', this.handleAddSecond.bind(this));
    this._view.on('remSec', this.handleRemSecond.bind(this));

/*    this._view.on('resetClick', this.handleReset.bind(this));*/
}

Controller.prototype.handleAddHour = function () {
    this._model.addHour();
};


Controller.prototype.handleRemHour = function () {
    this._model.remHour();
};

Controller.prototype.handleAddMinute = function () {
    this._model.addHour();
};

Controller.prototype.handleRemMinute = function () {
    this._model.remHour();
};

Controller.prototype.handleAddSecond = function () {
    this._model.addSecond();
};

Controller.prototype.handleRemSecond = function () {
    this._model.remSecond();
};
/*
Controller.prototype.handleReset = function () {
    this._model.reset();
};*/
