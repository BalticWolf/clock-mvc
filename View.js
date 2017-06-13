function View(model) {
    EventEmitter.call(this);
    this._model = model;
    this.init();
}

View.prototype = Object.create(EventEmitter.prototype);
View.prototype.constructor = View;

View.prototype.init = function() {
    var self = this;
    document.querySelectorAll('.changeOffset').forEach (function (button) {
        button.addEventListener('click', function(event) {
            var offset = event.target.getAttribute('data-offset');
            self.emit('offsetClick', offset);
        }.bind(this));
    });

    this._hourDisplay = document.querySelector('#hours');
    this._minuteDisplay = document.querySelector('#minutes');
    this._secondDisplay = document.querySelector('#seconds');

    this._model.on('timeChanged', this.showTime.bind(this));
};

View.prototype.showTime = function () {
    this._hourDisplay.innerText = this._model.getHours();
    this._minuteDisplay.innerText = this._model.getMinutes();
    this._secondDisplay.innerText = this._model.getSeconds();
};
