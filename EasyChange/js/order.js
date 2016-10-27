window.onload=function(){
		var list1=document.getElementById("order1").getElementsByTagName("a");
		for(var i=0;i<list1.length;i++){
			var index=i;
			list1[index].onclick=function(){
				var order1=document.getElementById("order-1");
				order1.innerHTML=this.innerHTML;
			}
		}
		var list2=document.getElementById("order2").getElementsByTagName("a");
		for(var i=0;i<list2.length-1;i++){
			var index=i;
			list2[index].onclick=function(){
				var order2=document.getElementById("order-2");
				order2.innerHTML=this.innerHTML;
			}
		}
		var list3=document.getElementById("order3").getElementsByTagName("a");
		for(var i=0;i<list3.length-1;i++){
			var index=i;
			list3[index].onclick=function(){
				var order3=document.getElementById("order-3");
				order3.innerHTML=this.innerHTML;
			}
		}
	}