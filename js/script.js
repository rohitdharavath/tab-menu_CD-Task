$(document).ready(function(){
 func();

 $(window).resize(function(){
 	func();
 });
});

function func(){
	var windowSize=$(window).width();
console.log(windowSize);
//dropdown for mobile with max width 800px
if(windowSize<800){
	$(".tab-section").hide();
	$('.tab-content').css('width','80%');
	$('.tab').hide();
	$('.tab:first').show();
	$(".dropdown").show();
	$("select").change(function(){
		$('.tab').hide();
		console.log("working");
		var target = $(this).val();
		console.log(target);
		$('#'+target).fadeIn();
		$("select option").removeClass('active');
		$("select option:selected").addClass('active');
		

	});
}else{
//tab menu for devices with width greater than 800px
 	$(".tab-section").show();
 	$(".dropdown").hide();
	$('.tab').hide();
	$('.tab:first').show();
//function tab menu
	$('ul.tab_buttons li').click(function(e){
		e.preventDefault();
		$('.tab').hide();

		var tabClick = $(this).attr("href");
		console.log(tabClick);
		$( "#"+tabClick).fadeIn();
		$('ul.tab_buttons li').removeClass('active');
		$(this).addClass('active');
	});

}
}

