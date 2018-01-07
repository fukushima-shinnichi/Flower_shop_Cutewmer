$(function(){
  

  //timer
  var timer_photo_click =setInterval(function(){
    $("#main_photo i.fa-arrow-right").click();
  },5000);
  
  //timer control
  $("div#main_photo").hover(function(){
    clearInterval(timer_photo_click);
  },function(){
    timer_photo_click = setInterval(function(){
      $("#main_photo i.fa-arrow-right").click();
    },5000);
  });

  
  //main photo right click
  $("#main_photo i.fa-arrow-right").click(function(){
    $("ul#slide").stop(true).animate({
      marginLeft:"-2560px"
    },"slow",function(){
      $("ul#slide").css("marginLeft","-1280px");
      $("ul#slide").append($("ul#slide li:first-child"));
    });
  });
  
  //main photo left click
  $("#main_photo i.fa-arrow-left").click(function(){
    $("ul#slide").stop(true).animate({
      marginLeft:"0px"
    },"slow",function(){
      $("ul#slide").css("marginLeft","-1280px");
      $("ul#slide").prepend($("ul#slide li:last-child"));
    });
  });
  
  //inside show
  $("div#under i").click(function(){
    $("div#inside").slideToggle(3000,function(){
      $("div#under i.fa-arrow-up").toggle(0);
      $("div#under i.fa-arrow-down").toggle(0);
    });
  });
  
  //nav recommended click
  //Coordinate point
  /*
  $("html,body").mousemove(function(e){
    console.log(e.clientX,e.clientY);
  });
  */
  
  $("#global_nav li:first").click(function(){
    $("html,body").stop(true).animate({
      scrollTop:982.13+"px"
    },1000);
  });
  
  //nav concept click
  $("#global_nav li:eq(1)").click(function(){
    $("html,body").stop(true).animate({
      scrollTop:1435.13+"px"
    },1000);
  });
  
  //nav maps click
  $("#global_nav li:last").click(function(){
    $("html,body").stop(true).animate({
      scrollTop:1700+"px"
    },1000);
  });
  
  
  //Responsive
  /*
  var windowWidth =$(window).width();
  var x =767;
  
  if(windowWidth <= x){
    $("#main_photo ul li img").hide();
  };
  */
  if($(window).width()<=767){
    //main photo right click
    $("#main_photo i.fa-arrow-right").click(function(){
      $("ul#slide").stop(true).animate({
        marginLeft:"-640px"
      },"slow",function(){
        $("ul#slide").css("marginLeft","-320px");
        $("ul#slide").append($("ul#slide li:first-child"));
      });
    });
    
    //main photo left click
    $("#main_photo i.fa-arrow-left").click(function(){
      $("ul#slide").stop(true).animate({
        marginLeft:"0px"
      },"slow",function(){
        $("ul#slide").css("marginLeft","-320px");
        $("ul#slide").prepend($("ul#slide li:last-child"))
      });
    });
    
    //nav recommended click
    $("#global_nav li:first").click(function(){
    $("html,body").stop(true).animate({
      scrollTop:378+"px"
    },1000);
  });
    
    //nav concept click
  $("#global_nav li:eq(1)").click(function(){
    $("html,body").stop(true).animate({
      scrollTop:1272.25+"px"
    },1000);
  });
  
  //nav maps click
  $("#global_nav li:last").click(function(){
    $("html,body").stop(true).animate({
      scrollTop:1610.75+"px"
    },1000);
  });
    
  };
  
  
});