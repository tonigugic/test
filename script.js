//Event Handler



	var items = document.getElementsByTagName("li");
	for (var i = 0; i < items.length; i++) {
		items[i].onclick = bookMark;
}

console.log(items
  );

function bookMark(eventObj) {
	var item  = eventObj.target;
  
  var id = item.id;
  var style = item.style.textDecoration;
 

  if(style == "") {
    document.getElementById(id).style.textDecoration = "line-through";
  } else {
    document.getElementById(id).style.textDecoration = "";
  }

	
		
}	




