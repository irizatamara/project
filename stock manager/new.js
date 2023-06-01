var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["itemName"] = document.getElementById("itemName").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["cost"] = document.getElementById("cost").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.itemName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.amount+" "+"Kg";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cost*+"100"+"RWF";
    cell4 = newRow.insertCell(3);
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("cost").value = "";
   
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cost").value = selectedRow.cells[2].innerHTML;   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.itemName;
    selectedRow.cells[1].innerHTML = formData.amount;
    selectedRow.cells[2].innerHTML = forData.cost;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("itemName").value == "") {
        isValid = false;
        document.getElementById("itemNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemNameValidationError").classList.contains("hide"))
            document.getElementById("itemNameValidationError").classList.add("hide");
    }
    return isValid;
}