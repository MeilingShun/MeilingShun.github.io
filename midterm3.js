var nameElement = document.getElementById("username");
var emailElement = document.getElementById("useremail");
var feedbackElement = document.getElementById("feedback");
function processFormData() {
const name = nameElement.value;
const email = emailElement.value;
alert("Thank you for your sharing , " + name+ "! We will contact you again via email at-" + email);
}
function addMsg() {

let table = document.getElementById("Feedback_table");

let newRow = table.insertRow();

newRow.insertCell().innerHTML = new Date().toLocaleString();
newRow.insertCell().innerHTML = nameElement.value;
newRow.insertCell().innerHTML = emailElement.value;
newRow.insertCell().innerHTML = feedbackElement.value;
newRow.insertCell().innerHTML = '<input type="button" value="Delete" onclick="delRow(this)"></input>'
nameElement.value = '';
emailElement.value = '';
feedbackElement.value = '';
}
function delRow(r) {
}










