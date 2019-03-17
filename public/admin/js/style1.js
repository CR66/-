		//  三级表单
	$(".banner-left").css({display:"none"});	
    var oli=$(".banner-left").children("ul").children("li");
    console.log(oli)
    $(".xi").hover(function(){
    	$(".banner-left").slideDown();	

	    $(".banner-left").hover(function(){
		    for(let i=0;i<oli.length;i++){
		    	oli.eq(i).hover(function(){
		    		oli.eq(i).css({background:"#58A301"}).children("a").css({color:"#fff"}).next().css({display:"block"})
		    		.parent().siblings().css({background:"#fff"}).children("a").css({color:"#58A301"}).next().css({display:"none"});
		    	},function(){
		    		oli.eq(i).css({background:"#fff"}).children("a").css({color:"#58A301"}).next().css({display:"none"});
		    	})
		    }
	    },function(){
	    	$(this).slideUp();
	    })
    })
    
//  选择块
    console.log($(".mo1").children("li"))
    $(".mo1").children("li").click(function(){
    	$(this).css({background:"#fff","border-top":"2px solid #58A301","border-bottom":"1px solid #fff"}).siblings()
    	.css({background: "url(../images/1.png)","border-top":"0","border-bottom":"1px solid #ccc"});
    	$(".mo").children("dd").eq($(this).index()).stop().show().siblings().stop().hide();
    })
//  触发
    $(".oimg").hover(function(){
    	$(this).stop().animate({padding:"1px"},100).css({border:"1px solid #f00"});
    },function(){
    	$(this).stop().animate({padding:"2px",},100).css({border:"1px solid #ccc","border-bottom":"0"});
    })
//  放大镜
    $(".banner-bottom-right-top-left-1").hover(function(){
    	$('#yi').css({display:"block"});
    	$('.zi').css({display:"block"});
    	$(this).mousemove(function(eve){
	    	var e= eve || window.event;
	    	var l=e.offsetX-$('#yi').get(0).offsetWidth/2;
	    	var h=e.offsetY-$('#yi').get(0).offsetHeight/2;
	    	if(l<=0) l=0;
	    	if(h<=0) h=0;
	    	if(h>=$(this).get(0).offsetHeight-$('#yi').get(0).offsetHeight) h=$(this).get(0).offsetHeight-$('#yi').get(0).offsetHeight;
	    	if(l>=$(this).get(0).offsetWidth-$('#yi').get(0).offsetWidth) l=$(this).get(0).offsetWidth-$('#yi').get(0).offsetWidth;
	    	$("#yi").css({left:l+"px",top:h+"px"});
	    	var x=l/($(this).get(0).offsetWidth-$('#yi').get(0).offsetWidth);
	    	var y=h/($(this).get(0).offsetHeight-$('#yi').get(0).offsetHeight);
	    	$(".iimg").css({left:x * ($('.zi').get(0).offsetWidth-$(".iimg").get(0).offsetWidth)+"px",top:y * ($('.zi').get(0).offsetHeight-$(".iimg").get(0).offsetHeight)+"px"});

    	})
    	
    },function(){
    	$('#yi').css({display:"none"});
    	$('.zi').css({display:"none"});
    })
//  购物数量
    var s=1;
   
    $("#jian").click(function(){
    	if(s<=1){
    		s=1
    	}else{
    		s--;
    	}
    	$("#shu").get(0).value=s;
    })
        $("#jia").click(function(){
           s++;
    	$("#shu").get(0).value=s;
    })
//  nav
    $(".nav").children("li").eq(0).children("a").css({background:"#fa963a"});
    $(".nav").hover(function(){
    	$(".nav").children("li").eq(0).children("a").css({background:""});
    },function(){
    	$(".nav").children("li").eq(0).children("a").css({background:"#fa963a"});
    })
     
     
    $("#txt").get(0).value="请输入关键字搜索";
    $("#txt").focus(function(){
    	$(this).get(0).value="";
    })
    
//  购物车
    $(".hihi").get(0).addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "bibi"){
                var id = target.parentNode.getAttribute("ip");
                setCookie(id,id)
                alert("添加购物车成功");
             } 
             function setCookie(key,value,day){
		         if(day){
		             var d = new Date();
		             d.setDate(d.getDate()+day);
		             document.cookie = key + "=" + value + ";expires=" + d;
		         }else{
		             document.cookie = key + "=" + value;
		         }
            }
            
    })  