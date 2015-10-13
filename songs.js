var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs[songs.length] = "All Tan Everything by Das Racist on the album Shut up, Dude"
songs.unshift("Running with the Devil by Van Halen on the album Best Of");

songs[1] = songs[1].replace(" > ", "  - ");
songs[1] = songs[1].replace("*", "");
//songs[1] = songs[1].replace(" on the album Eliminator", "");
songs[2] = songs[2].replace("@", "");
//songs[2] = songs[2].replace(" on the album Breakfast in America", "");
//songs[3] = songs[3].replace(" on the album The Wall", "");
songs[4] = songs[4].replace("(", "");
//songs[4] = songs[4].replace(" on the album Appetite for Destruction", "");
songs[5] = songs[5].replace("!", "");
songs[5] = songs[5].replace("*", "s");
//songs[5] = songs[5].replace(" on the album Jagged Little Pill", "");
songs[4] = songs[4].replace("(", " ");
songs[4] = songs[4].replace("(", " ");

for (i=0; i<songs.length; i++){
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("-", "");
}

var songOutput = "";

for (i=0; i<songs.length; i++){
songOutput = songOutput + "<p>" + songs[i] + "</p>"	
}
var songsElement = document.getElementById("songs-element");
console.log(songOutput);
songsElement.innerHTML = songOutput;
//for (i=0; i<songs.length; i++){

//}


//for ( i = 0; i < 300 ; i++) {

//}