$(document).ready(function() {
	
	$( "a" ).click(function(e) {
		
		if( this.hash !== "" ) {
			e.preventDefault();
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top
				}, 1000, function(){
					window.location.hash = hash;
					});
			}
	});
	

//						Navigation 
	$("#search_icn").click(function() {
		$("#search_box").toggleClass("clicked");
	});
	
	
	//        for mobile (mb) 
	$("#search_icn_mb").click(function() {
		$("#search_box_mb").toggleClass("clicked");
	});
	
	
	$(".fa-plus").click(function() {
		$(".fa-plus").toggleClass("rotate");
		$("#drop_menu").toggleClass("drop_down");
	});
	
	$("#nav_con").click(function() {
		$("#nav_bar").toggleClass("click");
		$(".fa-plus").removeClass("rotate");
		$("#drop_menu").removeClass("drop_down");
	});
	
//						navigation ends here
	
	
	
//						Testimonial 
	var imgIndex = [];
	var nameIndex_lg = [];
	
	 $("#imgGallery img").each(function() {
		imgIndex.push($(this).attr("src"));
	});
	var imgIndexLength = imgIndex.length;
	
	 $("#nameGallery p").each(function() {
		nameIndex_lg.push($(this).text());
	});
	var nameIndex_lgLength = nameIndex_lg.length;
	
	
	function textSlideShow_lg() {
		
		var displayImg = $("#image").attr("src");
		var displayImgIndex = $.inArray(displayImg, imgIndex);
		
		var displayName_lg = $("#displayName").text();
		var displayName_lgIndex = $.inArray(displayName_lg, nameIndex_lg);
		
		if (displayImgIndex == (imgIndexLength - 1) && displayName_lgIndex == (nameIndex_lgLength - 1) ) {
			displayImgIndex = -1;
			displayName_lgIndex = -1;
		}
		$("#image").attr("src", imgIndex[(displayImgIndex + 1)]);
		$("#displayName").html(nameIndex_lg[(displayName_lgIndex + 1)]);
	}
		$(document).ready(function() {
		setInterval(textSlideShow_lg, 5000);
	});
	
	
	//   for small screens
	
	var textIndex = [];
	var nameIndex = [];
	
	 $("#comment_gallery p").each(function() {
		textIndex.push($(this).text());
	});
	var textIndexLength = textIndex.length;
	
	 $("#name_gallery_mb p").each(function() {
		nameIndex.push($(this).text());
	});
	var nameIndexLength = nameIndex.length;
	
	
	function textSlideShow() {
		
		var displayText = $("#comment span").text();
		var displayTextIndex = $.inArray(displayText, textIndex);
		
		var displayName = $("#display_name_mb").text();
		var displayNameIndex = $.inArray(displayName, nameIndex);
		
		if (displayTextIndex == (textIndexLength - 1) && displayNameIndex == (nameIndexLength - 1) ) {
			displayTextIndex = -1;
			displayNameIndex = -1;
		}
		$("#comment span").html(textIndex[(displayTextIndex + 1)]);
		$("#display_name_mb").html(nameIndex[(displayNameIndex + 1)]);
	}
		$(document).ready(function() {
		setInterval(textSlideShow, 5000);
	});
		

//						testimonial ends here
	
	
	
	
//						Contact section

	$("form").submit(function(e) {
		e.preventDefault;
		
		$("#pop-up").fadeIn(function() {
			$("#container").css("opacity", 0);
			$(":input").attr("disabled", "disabled");
			});
			return false; 
		});
	
	$("#close-popup").click(function() {
		$("#pop-up").fadeOut(function() {
			$("#container").css("opacity", 1);
			$(":input").removeAttr("disabled").val("");
		});
		//$("form .input-style").

		});
	
	
	
	
});