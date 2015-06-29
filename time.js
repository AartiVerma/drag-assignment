var drgId;
var i=1;
var b;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
		console.log("DragId::"+ev.target.id);
		dragId=ev.target.id;	
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	if(dragId=='drag1'||dragId=='drag2'||dragId=='drag3'||dragId=='drag4'||dragId=='drag5'||dragId=='drag6'||dragId=='drag7'||dragId=='drag8')
	{
			console.log("match");
			ev.preventDefault();
			var data = ev.dataTransfer.getData("text");
			var nodeCopy = document.getElementById(data).cloneNode(true);
			nodeCopy.id = 'drop'+i;
			ev.target.appendChild(nodeCopy);
		i++;
	}
	else{
		ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	}		
	
<<<<<<< HEAD
}
=======
}
>>>>>>> 5e60a0f2f2e011e5d667df78b97bd97a13b27b4b
