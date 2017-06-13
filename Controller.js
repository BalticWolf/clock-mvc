function Controller(model, view) {
    this._model = model;
    this._view = view;

    // each time the event 'offsetClick' is triggered by the view,
    // the controller runs handleOffset
    this._view.on('offsetClick', this.handleOffset.bind(this));
    this._view.on('resetClick', this.handleReset.bind(this));
}

Controller.prototype.handleOffset = function (offset) {
    this._model.changeOffset(offset);
};

Controller.prototype.handleReset = function () {
    this._model.reset();
};
