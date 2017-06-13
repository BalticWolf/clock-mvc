function Controller(model, view) {
    this._model = model;
    this._view = view;

    // each time the event 'offsetClick' is triggered by the view,
    // the controller runs handleKey
    this._view.on('offsetClick', this.handleKey.bind(this));
}

Controller.prototype.handleKey = function (offset) {
    this._model.changeOffset(offset);
};