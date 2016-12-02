$(document).ready(function(){
	bannerPic();  //所有页面banner图滚动--8
	information();//信息发布页面  展开收起按钮--45
	teacherPic(); //首页教室档案 头像滚动--57
	dropdown();   //导航菜单下拉--106
	seeMore();    //侧边栏 “查看更多>>”--114
	setup();

	myFocus.set({//myfocus轮播效果
			id:'boxID',
			pattern:'mF_fancy',
			time:3,
			width:1000,
			height:330,
		});
})

//所有页面banner图滚动==================
function bannerPic(){
	var num=$("#img-roll").children("li").length;
	//设置ul的宽度
	$("#img-roll").width(function(){
		var ulWidth=$("#img-roll").children("li").eq(0).width()*num;
		return ulWidth;
	})
	function run(){
		var cenWidth=$("#img-roll").children("li").eq(0).width();
		$("#img-roll").animate({
			marginLeft:-cenWidth+"px"
		},6000,function(){
			$("#img-roll").children("li").eq(0).appendTo("#img-roll");
			$("#img-roll").css("marginLeft",0);
		})
	}
	//设置计时器调用滚动函数
	var Timer=setInterval(function(){
			run();
		},0);
	//鼠标滑过暂停
	$(".roll").hover(function(){
		clearInterval(Timer)
	},function(){
		Timer=setInterval(function(){
			run();
		},0);
	})
}

//信息发布页面  展开收起按钮============
function information(){
	$(".btn").each(function(index,ele){
		$(this).click(function(){
			var _html=($(this).text()=="收起 ︽" )? "查看更多>>":"收起 ︽";
			// console.log($(this))
			$(this).text(_html);
			$(".items").eq(index).toggleClass("items-height");
		})
	})
}

//首页教室档案 头像滚动=================
function teacherPic(){
	tWidth=$(".teacher").find("li").eq(0).width();//第一个li的宽度
	allW=$(".teacher").find("li").length;//获取滚动li的个数
	$(".teacher ul").width(allW*tWidth+"px");//设置ul的宽度
	var i=0;//定义全局i
	function roll(){//滚动函数
		if (i==-1) {
			$(".teacher ul").css("marginLeft",-(allW-2)*tWidth+"px");
			i=allW-3;
		}
		if (i==allW-1) {
			$(".teacher ul").css("marginLeft",0);
			i=1;
		}
		if (0<=i<allW-1) {
			$(".teacher ul").animate({
				marginLeft:-(tWidth*i)+"px",
			})
		}
	}
	//自动滚动
	var Timer2=setInterval(function(){
		i++;
		roll();
	},2000)
	$(".teacher").hover(function(){
		clearInterval(Timer2);
	},function(){
		Timer2=setInterval(function(){
			i++;
			roll();
		},2000)
	})
	//左右查看按钮
	$(".l-btn").click(function(){
		if(!$(".teacher ul").is(":animated")){
			i--;
			roll();
		}
	})
	$(".r-btn").click(function(){
		if(!$(".teacher ul").is(":animated")){
			i++;
			roll();
		}
	})
}

//导航菜单下拉==========================
function dropdown(){
	$(".nav").children("li").hover(function(){
		$(this).find("ul").slideToggle(100);
	})
}

//侧边栏 “查看更多>>”===================
function seeMore(){
	$(".seeMore").each(function(index){
		var theLength=$(".history").children("a").length;
		var theHeight=$(".history").children("a:first").height();
		// console.log(theLength)
		$(this).click(function(){
			var _html=($(this).text()=="点击收起 ▲")?"查看更多 ▼":"点击收起 ▲";
			$(this).text(_html);
			$(".history").eq(index).toggleClass("hisMore");
		})
	})	
}

function setup(){
	$(".setup ul>li a").each(function(index){
		$(this).click(function(){
			if(!$(".setup ul>li ul").is(":animated")){
				$(".setup ul>li").eq(index).children("ul").slideToggle(150);
			}
		})
	})
}