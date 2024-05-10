$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		evt.preventDefault(); // cancel the default action of the link

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // Fade out the current image, change the src and caption, then fade in
        $("#image").fadeOut(1000, function() {
            $("#image").attr("src", imageURL); // change the image source
            $("#caption").text(caption); // change the caption
            $("#image").fadeIn(1000); // fade in the new image
        });
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready