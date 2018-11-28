	$(document).ready(function() {

		"use strict";

		$(".top5li").webkitAnimationPlayState = "paused";

		$(".verjuego").on("click", function(e) {
			e.preventDefault();
			$.ajax({
				"url" : "./html/verjuego.html",
				"method" : "GET",
				"dataType" : "HTML",
				"success" : function(data) {
					$(".fullcontainer").html(data);

					$(".top5li").webkitAnimationPlayState = "running";

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
			    					count: 20
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
	        		$('.loading').hide();
	      		}
	      		else {
	        		for (var i = 0; i < reply.statuses.length; i++) {
	          			let tweet = reply.statuses[i];
	                			let json = {
	                  				src : tweet.user.profile_image_url,
	                 				user : tweet.user.screen_name,
	                 				text : tweet.text,
	                 				likes: tweet.favorite_count,
	                 				rts : tweet.retweet_count
	                			};
	                			tweetsArray.push(json);     
	              			
	          			 
	        		}
	        		console.log(tweetsArray.length);
	        		for (var i = 0; i < tweetsArray.length; i++) {
	          			$('.loading').hide();
	          			$('.d-block').css({
	            			"width": "60",
	            			"height":"50"
	          			});
	          			
              			$('.bottomcontainer').append('<div class="comentariosimple"><h2 class="usuario">'+
              										tweetsArray[i].user+'</h2><img class="d-block" src="'+tweetsArray[i].src+'">'+
              										tweetsArray[i].text+'<div class="heart"><i class="fa fa-heart" aria-hidden="true"></i></div>'+'<div class="likes">'+
              										tweetsArray[i].likes+'</div>'+'<div class="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></div>'+'<div class="rts">'+
              										tweetsArray[i].rts+'</div>');
	          			$('.heart').css({'animation':'latidos 1s infinite'});
	          			$('.heart').css({'animation':'3s color linear infinite'})
	        		}
	      		}
	    	},
	  	);
	};
});