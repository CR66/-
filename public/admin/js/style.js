//	轮播图	
    $(".box2").banner({
        items:$(".box2").children(".imgbox").children("img"),
        list:$(".box2").children(".list").children("span"),
        moveTime:200,
        autoPlay:true,
        delayTime:3000,
    });
    $(".box4").banner({
    	items:$(".box4").children(".imgbox1").children("h3"),
    	left:$(".btns-left"),
    	right:$(".btns-right"),
    	moveTime:200,
        autoPlay:true,
        delayTime:4000,
    });
    $("#txt").get(0).value="请输入关键字搜索";
    $("#txt").focus(function(){
    	$(this).get(0).value="";
    })
    
//  nav
    $(".nav").children("li").eq(0).children("a").css({background:"#fa963a"});
    $(".nav").hover(function(){
    	$(".nav").children("li").eq(0).children("a").css({background:""});
    },function(){
    	$(".nav").children("li").eq(0).children("a").css({background:"#fa963a"});
    })
//  三级表单
    var oli=$(".banner-left").children("ul").children("li");
//  console.log(oli)
    for(let i=0;i<oli.length;i++){
    	oli.eq(i).hover(function(){
    		oli.eq(i).css({background:"#58A301"}).children("a").css({color:"#fff"}).next().css({display:"block"})
    		.parent().siblings().css({background:"#fff"}).children("a").css({color:"#58A301"}).next().css({display:"none"});
    	},function(){
    		oli.eq(i).css({background:"#fff"}).children("a").css({color:"#58A301"}).next().css({display:"none"})
    	})
    }
//  充值
    var oiput=$(".banner-right-1-bottom-2").children("p").children("input").length;
    for(let i=0;i<oiput;i++){
	    	$(".banner-right-1-bottom-2").children("p").children("input").eq(i).click(function(){
	    		$("#txt1").get(0).value=$(this).get(0).value;
	    	})
    }
//  console.log(oiput)
    $(".a2").mouseover(function(){
    	$(".banner-right-1-bottom-1").css({display:"block"});
    	$(".banner-right-1-bottom-2").css({display:"none"});
    })
     $(".a3").mouseover(function(){
    	$(".banner-right-1-bottom-1").css({display:"none"});
    	$(".banner-right-1-bottom-2").css({display:"block"});

    })
     $("#btn1").click(function(){
     	alert("请登录");
     })
//   每日推荐
     var l=$(".mbox1").length;
     for(var i=0;i<l;i++){
     	$(".mbox1").eq(i).get(0).style.left=$(".mbox1").eq(0).width() * i+"px";
     }
     $(".imgbox2").get(0).style.width=l * $(".mbox1").eq(0).get(0).offsetWidth+"px";
      index=0;
      $("#mright").click(function(){
      	if(index == l-1){
      		index = 0;
      		$(".imgbox2").get(0).style.left=0;
      	}else{
      		index++;
      	}
      	$(".imgbox2").stop().animate({left:-$(".mbox1").eq(0).get(0).offsetWidth * index});
      })
      $("#mleft").click(function(){
      	if(index == 0){
      		index = l-2;
      		$(".imgbox2").get(0).style.left=-$(".mbox1").eq(0).get(0).offsetWidth * l+"px";
      	}else{
      		index--;
      	}
      	$(".imgbox2").stop().animate({left:-$(".mbox1").eq(0).get(0).offsetWidth * index});
      })
      
      var y=$(".main-2-2-connet-1").children(".main-2-2-connet-1-2").length;
//    console.log(oimg);

//    楼梯
    $(function(){
        $(".vvan").children("li").click(function(){
            $("html").stop().animate({
                scrollTop:$(".haha").eq($(this).index()).offset().top
            })
        })
    })
    
    
//购物车
    var arr="";
    for(var i=0;i<json.length;i++){
    	            arr +='<div class="main-2-2-connet-1" ip="'+json[i].IP
    	            +'"><div class="main-2-2-connet-1-2"><a href="#"> <img src="'+
    	                  json[i].src+'"/><h3 class="go">'+json[i].haha+'</h3></a><p><i>'+
    	                  json[i].name+'</i></p><p><span>'+
    	                  json[i].price+'</span><b>'+
    	                  json[i].price1+'</b></p></div></div>';
    	                  
    }
    $(".main-2-2-connet").get(0).innerHTML = arr;
    $(".main-2-2-connet-1").children(".main-2-2-connet-1-2").hover(function(){
		$(this).children("a").children(".go").stop().slideDown(); 
		
		
	},function(){
		$(this).children("a").children(".go").stop().slideUp();
	})
   $(".main-2-2-connet").get(0).addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "go"){
                var id = target.parentNode.parentNode.parentNode.getAttribute("ip");
                console.log(id)
                setCookie(id,id)
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
	         
	         function setGoods(){
		        this.goods = getCookie(id)==="" ? [] : JSON.parse(getCookie(id));
		        if(this.goods.length < 1){
		            this.goods.push({
		                id:this.id,
		                num:1
		            })
		        }else{
		            var onoff = true;
		            for(var i=0;i<this.goods.length;i++){
		                if(this.goods[i].id === this.id){
		                    this.goods[i].num++;
		                    onoff = false;
		                    break;
		                }
		            }
		            if(onoff){
		                this.goods.push({
		                    id:this.id,
		                    num:1
		                })
		            }
		        }
		        setCookie(id,id);
	        }
            
     }) 
