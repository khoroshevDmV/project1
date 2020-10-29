/*function count_of_people() {
	switch(localStorage.length % 10 / 2) {
		case 1:
			count.innerHTML = "Нас уже " + (localStorage.length / 2) + " пользователь";
			break;
		case 2:
		case 3:
		case 4:
			count.innerHTML = "Нас уже " + (localStorage.length / 2) + " пользователя";
			break;
		default:
			count.innerHTML = "Нас уже " + (localStorage.length / 2) + " пользователей";
	}
}*/
history_next.onclick = function() {
	window.location = "/history.html";
}
memorable_places_next.onclick = function() {
	window.location = "/memorable_places.html";
}
сulture_and_art_next.onclick = function() {
	window.location = "/culture_and_art.html";
}
personality_next.onclick = function() {
	window.location = "/personality.html";
}