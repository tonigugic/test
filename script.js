//Event Handler

window.onload = init;

function init() {
	var items = document.getElementsByTagName("li");
	for (var i = 0; i < items.length; i++) {
		items[i].onclick = bookMark;
	}
}

function bookMark(eventObj) {
	var item  = eventObj.target;
  var id = item.id;

	document.getElementById(id).style.textDecoration = "line-through";
		
}	




