$(function(){

    $("#add-line-button").click(function(){

    /* var id = document.getElementById("idInput").value;
    var name = document.getElementById("nameInput").value; */
    var id = $("#idInput").val()
    var name = $("#nameInput").val()

     if ( id !== "" && name !=="") {
        var newRow = $('<tr></tr>');
        var cell1 = $('<td></td>').text(id);
        var cell2 = $('<td></td>').text(name);
        var cell3 = $('<td></td>')
        
        newRow.append(cell1);
        newRow.append(cell2);
        newRow.append(cell3);

        $('#dataTable').append(newRow);

       
        var deleteButton = $('<button>Xóa</button>');
        cell3.append(deleteButton);
        
        deleteButton.click(function() {
    
        newRow.remove();
        });

        $("#idInput").val("")
        $("#nameInput").val("")

        
    } else {
        alert("Vui lòng nhập đầy đủ ID và Name");
    } 
    })
  
















  });