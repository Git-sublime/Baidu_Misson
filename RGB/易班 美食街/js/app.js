$(document).ready(function(){
  $(".item1").hover(function(){
  	$(this).addClass("animated rotateIn");
  },function(){
  	$(this).removeClass("animated rotateIn");
  })

  $(".navbar-nav li").click(function(){
  	$(this).addClass("active").siblings().removeClass("active");
  	console.log($(this));
  });
  $('.carousel').carousel();
});