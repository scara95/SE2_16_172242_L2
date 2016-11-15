var _ = function () {
    var model = new Model(13);
    test(model.check());
    model.add("bulloni", 5);
    test(model.get("bulloni") == 5);
    model.add("bulloni", 3);
    test(model.get("bulloni") == 8);
    model.add("biscotti", 5);
    test(model.get("biscotti") == 5);
    test(model.get("bulloni") == 8);
    test(model.check());
    model.add("bulloni", 6);
    test(!model.check());
}();