function View(model) {
    EventEmitter.call(this);
    this._model = model;
    this._hourDisplay = document.querySelector('#hours');
    this._minuteDisplay = document.querySelector('#minutes');
    this._secondDisplay = document.querySelector('#seconds');
    this.init();
}

// View inherits from EventEmitter
View.prototype = Object.create(EventEmitter.prototype);
View.prototype.constructor = View;

View.prototype.init = function() {
    // Prepare buttons to change the time
    document.querySelectorAll('.changeOffset').forEach (function (button) {
        button.addEventListener('click', function(event) {
            var offset = event.target.getAttribute('data-offset');
            this.emit('offsetClick', offset); // broadcast the event 'offsetClick'
        }.bind(this));
    }.bind(this));

    // Prepare button to reset the time
    var btnReset = document.querySelector('#reset');
    btnReset.addEventListener('click', function() {
        this.emit('resetClick'); // broadcast the event 'resetClick'
    }.bind(this));

    // each time the event 'timeChanged' is triggered by the model,
    // the view runs showTime
    this._model.on('timeChanged', this.showTime.bind(this));
};

// Display the clock
View.prototype.showTime = function () {
    var hours = this._model.getHours();
    var minutes = this._model.getMinutes();
    var seconds = this._model.getSeconds();

    this._hourDisplay.innerText = hours < 10 ? '0' + hours : hours; // display on 2 digits
    this._minuteDisplay.innerText = minutes < 10 ? '0' + minutes : minutes;
    this._secondDisplay.innerText = seconds < 10 ? '0' + seconds : seconds;
};
