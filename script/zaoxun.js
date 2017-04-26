//设置导航的高度
var menuHeight = $("#menu").height();
var navHeight = $("#nav").height();
$("#navList").height(navHeight - menuHeight - $("#navList").css("padding-top"));
//滑动页面，logo改动
$(window).scroll(function(){
	if($(window).scrollTop()>=75) {
        $("#logoFigure").css({
        	"width": "75px",
        	"height": '75px'
        }); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
       	$("#logoFigure img").attr("src", "/images/logo2.png");
    }else {
        $("#logoFigure").css({
        	"width": "130px",
        	"height": '130px'
        }); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
       	$("#logoFigure img").attr("src", "/images/logo.png");
    }
});
//显示和关闭二级菜单
$(".nav-item > a").mouseenter(function() {
	$(this).parent("li").find("ul").slideDown(400);
});
$("#navList").mouseleave(function() {
    $(".nav-item > ul").slideUp(400);
});
//显示和关闭导航
$("#menu").on("click", function(e){
	$("#navList").slideToggle(400);
	$(document).on("click",function(){
		$("#navList").slideUp(400);
	});
	e.stopPropagation();
});
$("#navList").on("click",function(e){
	e.stopPropagation();
});

/*回到顶部*/
$(window).scroll(function () {
    if($(window).scrollTop()>=100) {
        $("#toTop").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").click(function () { 
    $("html, body").animate({scrollTop: 0}, 100); /* 持续时间为 100ms */
    return false;
});