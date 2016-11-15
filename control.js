var model = new Model(30);
renderLimit(model);
renderTable(model);

function checkLimit() {
    if(!model.check()) {
        showLimitAlert();
    }
}

document.getElementById("add-button").onclick = function () {
    clearInput();
    showAdder();
    checkLimit();
};

document.getElementById("add-thing").onclick = function () {
    var thing = document.getElementById("thing").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    model.add(thing, quantity);
    renderTable(model);
    hideAdder();
    checkLimit();
};

document.getElementById("max-set").onclick = function () {
    var limit = parseInt(document.getElementById("max-elements").value);
    if(isNaN(limit)) return;
    model.setLimit(limit);
    renderLimit(model);
    checkLimit();
};