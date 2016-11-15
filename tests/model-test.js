var _ = function () {
    var model = new Model();
    model.add("bulloni", 5);
    test(model.get("bulloni") == 5);
    model.add("bulloni", 3);
    test(model.get("bulloni") == 8);
    model.add("biscotti", 5);
    test(model.get("biscotti") == 5);
    test(model.get("bulloni") == 8);
}();