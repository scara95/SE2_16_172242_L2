//render the table from model
function renderTable(model) {
    var table = document.getElementById("table")
    //clear the table
    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }
    //insert headers
    var object_h = document.createElement("th");
    object_h.innerText = "Objects";
    var quantity_h = document.createElement("th");
    quantity_h.innerText = "Quantities";
    var table_h = document.createElement("tr");
    table_h.appendChild(object_h);
    table_h.appendChild(quantity_h);
    table.appendChild(table_h);
    //trasverse model data and insert rows
    for(var thing in model.data) {
        var object = document.createElement("td");
        object.innerText = thing;
        var quantity = document.createElement("td");
        quantity.innerText = model.get(thing).toString();
        var row = document.createElement("tr");
        row.appendChild(object);
        row.appendChild(quantity);
        table.appendChild(row);
    }
}

//show the adder panel
function showAdder() {
    document.getElementById("adder").classList.remove("hide");
}

//hide the adder panel
function hideAdder() {
    document.getElementById("adder").classList.add("hide");
}

//clear the adder input
function clearInput() {
    document.getElementById("thing").value = "";
    document.getElementById("quantity").value = "";
}

//display an alert
function showLimitAlert() {
    alert("Attenzione! Hai superato il limite impostato.");
}

//render the limit from model
function renderLimit(model) {
    document.getElementById("max-current").innerText = model.getLimit().toString();
}