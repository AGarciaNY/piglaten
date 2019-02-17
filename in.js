/*global $*/
$("#two").click(function(){

	var english= $("#one").val() ;
	
	var piglat= english.split(" ");
	
	$("#four").html(piglat);
	
	for( var i=0; i < piglat.length ; i++){
		var first = piglat.charAt(0);
	
		var wordtwo = piglat.slice(1);
	
			if(first==="a"){
			$("#five").html(piglat[i]+"ay");
		} 
		else if(first==="e"){
			$("#five").html(piglat[i]+"ay");
		}
		else if(first==="i"){
			$("#five").html(piglat[i]+"ay");
		} 
			else if(first==="o"){
			$("#five").html(piglat[i]+"ay");
		} 
		else if(first=== "u"){
			$("#five").html(piglat[i]+"ay");
			}
		else if(first!== "a"){
			$("#five").html(wordtwo+first+"ay");
		}	
		
		$("#three").append( piglat[i] +"ay ");
		console.log(piglat[i]);
	
	}
	$("#te").html(first);
	$(".te").html(wordtwo);
});


