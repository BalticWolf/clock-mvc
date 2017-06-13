function Controller(model, view) {
    this._model = model;
    this._view = view;
    this._view.on('offsetClick', this.handleKey.bind(this));
}

Controller.prototype.handleKey = function (offset) {
    this._model.changeOffset(offset);
};