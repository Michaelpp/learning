

$(document).ready(function(){
    $(".hideit").fadeIn(5000).removeClass("hideit");
    $('a[href*="#"]').on("click", function(event){
      event.preventDefault();
    $("html, body").animate({
        scrollTop:$($(this).attr("href")).offset().top-100
      }, 700, 'linear');
  });
});

/*
$(document).ready(function(){
    $(".hideit").fadeIn(5000).removeClass("hideit");
    $('a[href*="#"]').on("click", function(event){
      event.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, 700, 'linear');
  });
});
*/


$(document).ready(function(){
 	$(window).scroll(function(){
 		if ($(window).scrollTop() > 100){
 			$("#btn").css("visibility","visible");
 		} else {
 			$("#btn").css("visibility","hidden");
 		}
 	});

 	$("#btn").on('click',function(event){
 		event.preventDefault();
 		$("html,body").animate({scrollTop:0},"2000");
 	});
 });


$(document).ready(function(){
	var images =["imgs/bgimg1.jpg","imgs/bgimg2.jpg","imgs/bgimg3.jpg","imgs/bgimg4.jpg"]
	var i = 0;
	setInterval(function() {
      $("body").css("backgroundImage",'url('+ images[i] +')');
      i += 1;
      if (i == images.length) {
      		i = 0;
  		};
	}, 10000);
	
});




