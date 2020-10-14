var list = document.getElementById("list");
var count = 0;

document.getElementById("button").addEventListener("click", addList);

document.getElementById("remove").addEventListener("click", removeList);

function addList() {
  count += 1;
  var input = document.getElementById("input").value;
  var lentry = document.createElement("li");
  if (count % 3 == 0) {
    lentry.style.color = "red";
  }

  lentry.appendChild(document.createTextNode(input));
  if (input !== "" && input !== null) {
    list.appendChild(lentry);
  } else {
    count -= 1;
    alert("Please provide the valid input");
  }
  document.getElementById("input").value = "";
}

function removeList() {
  var test = list.removeChild(list.childNodes[0]);
  console.log(test);
}
