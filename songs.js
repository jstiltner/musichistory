$(document).ready(function() {
//function definitions
	function fillResultBox(){
	  $.ajax({
	    url: "data/songs.json"
	  }).done(function(songList) {
	      $("#resultsbox").html("");
	    for (var i=0; i < songList.songs.length; i++){
	      var currentSong = songList.songs[i];
	      $("#resultsbox").append("<div id='song-container'><h1>" + currentSong.title + "</h1><div>Performed by <artist>"+ currentSong.artist +"</artist></div><div> on the Album " + currentSong.album + "</div><button class ='button' id ='deletor' type='button' text='Delete'>Delete</button>").click(deleteSong);
	    }
		$("#resultsbox").append('<div id="more-button-container"><button id="more-button">More</button>').click(moreSongs);
	  })
	}

	function moreSongs(){
		$("more-button").hide();
		$.ajax({
	    url: "data/more.json"
	  }).done(function(songList) {
	    for (var i=0; i < songList.songs.length; i++){
	      var currentSong = songList.songs[i];
		console.log("loop");
	      $("#resultsbox").append("<div id='song-container'><h1>" + currentSong.title + "</h1><div>Performed by <artist>"+ currentSong.artist +"</artist></div><div> on the Album " + currentSong.album + "</div><button class ='button' id ='deletor' type='button' text='Delete'>Delete</button>").click(deleteSong);
		}
	})
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
		fillResultBox();
	}

	function deleteSong(){
		if (event.target.id === "deletor") {
		  event.target.parentNode.remove();
		  // Could edit the imported array here to delete the element deleted on screen.
		}
	}


	//Loads Pre-loaded songs into results div from JSON
	window.onLoad = fillResultBox();

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
		// songs.push($("#song-input").val());
		// artists.push($("#song-input").val());
		// albums.push($("#song-input").val());
		fillResultBox();
		goToViewMusicView();

	});
});