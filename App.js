(function() {
    var model = new Model();
    var view = new View(model);
    new Controller(model, view);
})();
