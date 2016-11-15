function test(bool) {
    var p = document.createElement("p");
    p.innerText = bool?"Passed":"Failed";
    document.getElementsByTagName("BODY")[0].appendChild(p);
}