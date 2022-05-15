
		window.onload=montre;
		function montre(id) {
		var d = document.getElementById(id);
			for (var i = 1; i<=10; i++) {
				if (document.getElementsByClassName('smenu'+i)) {document.getElementById('smenu'+i).style.display='none';}
			}
		if (d) {d.style.display='block';} // ou {d.style.display='inline';}
		}
		