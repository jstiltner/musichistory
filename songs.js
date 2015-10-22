$(document).ready(function() {
//Generates arrays
var songs=[];
var artists=[];
var albums=[];
//Pre-loads four songs into arrays.
songs = ["You and Whose Army?", "Tous les memes", "Certified Air Raid Material", "Once in a Lifetime"];
artists = ["Radiohead", "Stromae", "Glitch Mob", "Talking Heads"];
albums = ["Amnesiac", "Racines Carres", "Certified Air Raid Material", "Once in a Lifetime"];
//function definitions

function rebuildResults(){

$("#resultsbox").html("<article>");
	for (i=0 ; i < artists.length; i++){
		$("#resultsbox").append("<section><div class = 'bigResultText'>" + songs[i] + "</div><div>by " + artists[i] + " on the album " + albums[i] + "</section");
}
}

function goToAddMusicView(){
	$("#song-input-content").show();
	$("#filterbox").hide();
	$("#resultsbox").hide();
}

function goToViewMusicView(){
	$("#song-input-content").hide();
	$("#filterbox").show();
	$("#resultsbox").show();
}
//Loads Pre-loaded songs into results div
rebuildResults();

// Ties named functions to buttons
$("#add-music").click(goToAddMusicView);
$("#view-music").click(goToViewMusicView);

// Add Button triggers the addition of new elements to the arrays and switches views
$("#add-button").click(function(){
	//form-checker for #Add-music view
	if ($("#song-input").val().length === 0){
		alert("Aghem, your song, fool.")
		$("#song-input").focus();
		return false;
	}
	else if ($("#artist-input").val().length === 0){
		alert("Aghem, who's that artist, joker?")
		$("#artist-input").focus();
		return false;
	}
	else if ($("#album-input").val().length === 0){
		alert("Aghem, which album, boss?")
		$("#album-input").focus();
		return false;
	}
	songs.push($("#song-input").val());
	artists.push($("#song-input").val());
	albums.push($("#song-input").val());
	goToViewMusicView();
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
// var songsElement = $("songs-element");
// console.log(songOutput);
// songsElement.innerHTML = songOutput;
//for (i=0; i<songs.length; i++){

//}


//for ( i = 0; i < 300 ; i++) {

//}
});