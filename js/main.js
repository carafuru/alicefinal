$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});

if (document.createElement("detect").style.textShadow === "") {
	document.getElementsByTagName("html")[0].className += " textshadow";
}