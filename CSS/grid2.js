function clickk() {
    var rows = document.getElementsByTagName("input")[0].value;
    var cols = document.getElementsByTagName("input")[1].value;
    var tab = document.createElement("table");
    for (var i = 0; i < rows; i++) {
        var ro = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
            var co = document.createElement("td");
            co.style.border = "1px solid black"; 
            co.style.width = "20px"; 
            co.style.height = "20px"; 
            ro.appendChild(co);
        }
        tab.appendChild(ro);
    }
    document.body.appendChild(tab);
}
