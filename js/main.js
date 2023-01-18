$(function () {

	var menuLink = $(".burger");
	var menu = $(".menu");
	var close = $(".btn_close");
	var navLink = $("ul li a");
	var contents = $(".contents");


	menuLink.click(function () {
		menu.toggleClass("menu_active");
	})

	close.click(function (e) {
		e.preventDefault();
		menu.toggleClass("menu_active");
	})//

	// navLink.on("click", function (event) {
	// 	event.preventDefault();
	// 	var target = $(this).attr("href");
	// 	var top = $(target).offset().top;
	// 	$("html, body").animate({
	// 		scrollTop: top
	// 	}, 500);
	//})//

	// contents.click(function(){
	// 	menu.toggleClass("menu_active");
	// })//


}) //jQuery