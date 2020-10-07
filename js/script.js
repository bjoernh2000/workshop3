var list = document.getElementById("list");
var count = 0;

function addList() {
  count += 1;
  var input = document.getElementById("input").value;
  var lentry = document.createElement("li");
  if (count % 3 == 0) {
    lentry.setAttribute("style", "color:red");
  }
  lentry.appendChild(document.createTextNode(input));
  if (input !== "" && input !== null) {
    list.appendChild(lentry);
  } else {
    alert("Please provide the valid input");
  }
  document.getElementById("input").value = "";
}
