function rebuildResults(){
var resultsContents = document.getElementById("resultsbox");
resultsContents.innerHTML = "<article>";
	for (i=0 ; i < artists.length; i++){
resultsContents.innerHTML += "<section><div class = 'bigResultText'>" + songs[i] + "</div><div>by " + artists[i] + " on the album " + albums[i] + "</section";
}
}

var songs=[];
var artists=[];
var albums=[];


songs = ["You and Whose Army?", "Tous les memes", "Certified Air Raid Material", "Once in a Lifetime"];
artists = ["Radiohead", "Stromae", "Glitch Mob", "Talking Heads"];
albums = ["Amnesiac", "Racines Carres", "Certified Air Raid Material", "Once in a Lifetime"];
rebuildResults();

// Add Music View
var button = document.getElementById("add-music");
button.addEventListener("click", function(){
	var El = document.getElementById("song-input-content");
	El.classList.remove("hidden");
	var ElOne = document.getElementById("filterbox");
	ElOne.classList.add("hidden");
	var Eltwo = document.getElementById("resultsbox");
	Eltwo.classList.add("hidden");

});

// List Music View
var view = document.getElementById("view-music");
view.addEventListener("click", function(){
	var El = document.getElementById("song-input-content");
	El.classList.add("hidden");
	var El = document.getElementById("filterbox");
	El.classList.remove("hidden");
	var Eltwo = document.getElementById("resultsbox");
	Eltwo.classList.remove("hidden");
	rebuildResults();
});

// Add Button triggers the addition of new elements to the arrays and switches views
var addSong = document.getElementById("add-button");
addSong.addEventListener("click", function(){
var newSong = document.getElementById("song-input").value;
var newArtist = document.getElementById("artist-input").value;
var newAlbum = document.getElementById("album-input").value;
if(document.getElementById("song-input").value.length === 0){
	alert("Aghem, your song, fool.")
	document.getElementById("song-input").focus();
	return false;
}
else if (document.getElementById("artist-input").value.length === 0){
	alert("Aghem, who's that artist, joker?")
	document.getElementById("artist-input").focus();
	return false;
}
else if (document.getElementById("album-input").value.length === 0){
	alert("Aghem, which album, boss?")
	document.getElementById("album-input").focus();
	return false;
}

songs.push(newSong);
artists.push(newArtist);
albums.push(newAlbum);
var El = document.getElementById("song-input-content");
	El.classList.add("hidden");
	var El = document.getElementById("filterbox");
	El.classList.remove("hidden");
	var Eltwo = document.getElementById("resultsbox");
	Eltwo.classList.remove("hidden");
	rebuildResults();

});






// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// songs[songs.length] = "All Tan Everything by Das Racist on the album Shut up, Dude"
// songs.unshift("Running with the Devil by Van Halen on the album Best Of");

// songs[1] = songs[1].replace(" > ", "  - ");
// songs[1] = songs[1].replace("*", "");
// //songs[1] = songs[1].replace(" on the album Eliminator", "");
// songs[2] = songs[2].replace("@", "");
// //songs[2] = songs[2].replace(" on the album Breakfast in America", "");
// //songs[3] = songs[3].replace(" on the album The Wall", "");
// songs[4] = songs[4].replace("(", "");
// //songs[4] = songs[4].replace(" on the album Appetite for Destruction", "");
// songs[5] = songs[5].replace("!", "");
// songs[5] = songs[5].replace("*", "s");
// //songs[5] = songs[5].replace(" on the album Jagged Little Pill", "");
// songs[4] = songs[4].replace("(", " ");
// songs[4] = songs[4].replace("(", " ");

// for (i=0; i<songs.length; i++){
// 	songs[i] = songs[i].replace(">", "-");
// 	songs[i] = songs[i].replace("-", "");
// }

// var songOutput = "";
// var artists = [];
// var titles = [];
// var firstChar;
// for (i=0; i<songs.length; i++){
// 	firstChar = songs.indexOf("by");
// 	console.log(firstChar);
// 	if (firstChar !== -1){
// 		var titles = songs.slice(0,firstChar-1);
// 	}
// console.log("titles slice", titles);
// songOutput = songOutput + "<p>" + songs[i] + "</p>"	
// }
// var songsElement = document.getElementById("songs-element");
// console.log(songOutput);
// songsElement.innerHTML = songOutput;
//for (i=0; i<songs.length; i++){

//}


//for ( i = 0; i < 300 ; i++) {

//}