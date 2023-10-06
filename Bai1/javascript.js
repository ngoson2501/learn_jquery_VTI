function add() {
    var id = document.getElementById("idInput").value;
    var name = document.getElementById("nameInput").value;

    if (id.trim() !== "" && name.trim() !== "") {
        var table = document.getElementById("dataTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = id;
        cell2.innerHTML = name;

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function() {
            table.deleteRow(row.rowIndex);
        };
        cell3.appendChild(deleteButton);

        document.getElementById("idInput").value = "";
        document.getElementById("nameInput").value = "";
    } else {
        alert("Vui lòng nhập đầy đủ ID và Name");
    }
}