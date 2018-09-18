 var studentsArray = [];
var selectedIndex = -1;
function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.studentsRecord) {
        studentsArray = JSON.parse(localStorage.studentsRecord);
        for (var i = 0; i < studentsArray.length; i++) {
            prepareTableCell(i, studentsArray[i].firstname, studentsArray[i].lastname, studentsArray[i].rollnum, studentsArray[i].subject);
        }
    }
}
function onRegisterPressed() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var rollNum = document.getElementById("rollnum").value;
    var subject = document.getElementById("subject").value;
    var stuObj = {firstname: firstName, lastname: lastName, rollnum: rollNum, subject: subject};
    if (selectedIndex === -1) {
        studentsArray.push(stuObj);
    } else {
        studentsArray.splice(selectedIndex, 1, stuObj);
    }
    localStorage.studentsRecord = JSON.stringify(studentsArray);
    init();
    onClarPressed();
}
function prepareTableCell(index, firstName, lastName, rollNum, subject) {
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var rollNumCell = row.insertCell(2);
    var subjectCell = row.insertCell(3);
    var actionCell = row.insertCell(4);
    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    rollNumCell.innerHTML = rollNum;
    subjectCell.innerHTML = subject;
    actionCell.innerHTML = '<button onclick="onEditPressed(' + index + ')">Edit</button><br/><button onclick="deleteTableRow(' + index + ')">Delete</button>';
}
function deleteTableRow(index) {
    /*
     var table = document.getElementById("regtable");
     table.deleteRow(index+1);
     */
    studentsArray.splice(index, 1);
    localStorage.studentsRecord = JSON.stringify(studentsArray);
    init();
}
function onClarPressed() {
    selectedIndex = -1;
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("rollnum").value = "";
    document.getElementById("subject").value = "Math";
    document.getElementById("submit").innerHTML = "Register";
}

function onEditPressed(index) {
    selectedIndex = index;
    var stuObj = studentsArray[index];
    document.getElementById("firstname").value = stuObj.firstname;
    document.getElementById("lastname").value = stuObj.lastname;
    document.getElementById("rollnum").value = stuObj.rollnum;
    document.getElementById("subject").value = stuObj.subject;
    document.getElementById("submit").innerHTML = "Update";
    
}