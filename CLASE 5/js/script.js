	$(document).ready(function() {

		"use strict";

		$(".verjuego").on("click", function(e) {
			e.preventDefault();
			$.ajax({
				"url" : "./html/verjuego.html",
				"method" : "GET",
				"dataType" : "HTML",
				"success" : function(data) {
					$(".fullcontainer").html(data);

					$(".tohome").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/home.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".fullcontainer").html(data);
							}
						});
					});

					$(".todescrip").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/descripcion.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".bottomcontainer").html(data);
							}
						});
					});

					$(".tohelp").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/ayuda.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".bottomcontainer").html(data);
							}
						});
					});

					$(".tocomment").on("click", function(e) {
						e.preventDefault();
						$.ajax({
							"url" : "./html/comentarios.html",
							"method" : "GET",
							"dataType" : "HTML",
							"success" : function(data) {
								$(".bottomcontainer").html(data);
													let params = {
			   q: "Space Invaders",
			    count: 100
			  };
			  tweetsArray.length = 0;
			  searchTweets(params);
							}
						});
					});
				}
			});
		});


	let tweetsArray = [];
	let cb = new Codebird;
	cb.setProxy("https://cb-proxy.herokuapp.com/");
	cb.setConsumerKey("iOd7FdG7T3dE1asEHOFxLmdKr", "VdkGM4SSycjpkKrALkwbrO7aQiz696d6twGrVVRcYTvJDS00xQ");
	cb.setToken("1368012535-kTk798jfE3ySB8ObnlWCzqNJ8uydUqvFEfkTyAk", "NkBbB1mistXTu7JWC77gdCC1WMmRnNQVQarg6HHOijCca");

	$('.loading').hide();
	
	function searchTweets(params) {

	  event.preventDefault();
	  $('.loading').show();

	  cb.__call(
	    "search_tweets",
	    params,
	    function (reply) {
	    if(reply.statuses.length == 0){
	        $('.nohay').html("tweets!");
	        $('.loading').hide();
	      }
	      else{
	        for (var i = 0; i < reply.statuses.length; i++) {
	          let tweet = reply.statuses[i];
	          if(tweet.extended_entities && tweet.extended_entities.media[0].type == "photo") {
	              if(tweet.extended_entities.media.length > 0){
	                let json = {
	                  src : reply.statuses[i].user.profile_image_url,
	                 user : reply.statuses[i].user.screen_name,
	                 text : reply.statuses[i].text,
	                };
	                tweetsArray.push(json);     
	              }
	          }
	        
	        }
	        console.log(tweetsArray.length);
	        for (var i = 0; i < tweetsArray.length; i++) {
	          $('.loading').hide();
	          $('.d-block').css({
	            "width": "60",
	            "height":"50"
	          });
              $('.comentarios').append('<h2 class="usuario">'+tweetsArray[i].user+'</h2><img class="d-block" src="'+tweetsArray[i].src+'"><div class="comentarios">'+tweetsArray[i].text+'</div>');
	        }
	        
	      
	      }
	    },
	  );

	};


	});