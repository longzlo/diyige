// JavaScript Document


//index二级菜单
$(function(){
	$(".y_navul>li").hover(function(){
		$(this).children("div").stop(false,true).slideDown(300);
	},function(){
		$(this).children("div").stop(false,true).slideUp(300);
	});
	$(".s_navchildren").map(function(){
		var width=$(this).width();
		$(this).css("margin-left",-width/2+"px");
	})
});




