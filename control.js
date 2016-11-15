var model = new Model();

document.getElementById("add-button").onclick = function () {
    clearInput();
    showAdder();
}

document.getElementById("add-thing").onclick = function () {
    var thing = document.getElementById("thing").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    model.add(thing, quantity);
    renderTable(model);
    hideAdder();
}