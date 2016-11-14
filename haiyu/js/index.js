$(document).ready(function(){
	var num=$("#img-roll").children("li").length;
	//设置ul的宽度
	$("#img-roll").width(function(){
		var ulWidth=$(".center").width()*num;
		return ulWidth;
	})
	//设置li的宽度
	$("#img-roll").children("li").width(function(){
		var liWidth=$(".center").width();
		return liWidth;
	})
	//定义滚动函数
	function run(){
		var cenWidth=$(".center").width();
		$("#img-roll").animate({
			marginLeft:-cenWidth+"px"
		},700,function(){
			$("#img-roll").children("li").eq(0).appendTo("#img-roll");
			$("#img-roll").css("marginLeft",0);
		})
	}
	//设置计时器调用滚动函数
	var Timer=setInterval(function(){
			run();
		},3000);
	//鼠标滑过暂停
	$(".roll").hover(function(){
		clearInterval(Timer)
	},function(){
		Timer=setInterval(function(){
			run();
		},3000);
	})

	//展开收起按钮
	$(".btn").each(function(index,ele){
		$(this).click(function(){
			var _html=$(this).text()=="收起 ︽" ? "查看更多>>":"收起 ︽";
			// console.log($(this))
			$(this).text(_html);
			$(".items").eq(index).toggleClass("items-height");
		})
	})
	
})//ready()