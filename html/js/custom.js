/* smooth scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

/* scrollspy */
$('body').scrollspy({ target: '#navbar-scroll' })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/* carousel */
$(document).ready(function() {
$("#screenshots").owlCarousel({
	items: 4,
	itemsCustom : [
		[0, 1],
		[480, 2],
		[768, 3],
		[992, 4]
		],
    });
$("#owl-testi").owlCarousel
({
	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	autoHeight : true,
	singleItem:true
});
});


/* sticky navigation */
  $(document).ready(function(){
    $("#menu").sticky({topSpacing:0});
  });

jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


	
/* scrollToTop */
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
	
/* parallax background image http://www.minimit.com/articles/lets-animate/parallax-backgrounds-with-centered-content	
/* detect touch */
if("ontouchstart" in window){
    document.documentElement.className = document.documentElement.className + " touch";
}
if(!$("html").hasClass("touch")){
    /* background fix */
    $(".parallax").css("background-attachment", "fixed");
}

/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".landing, .action, .contact, .subscribe").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

/* set parallax background-position */
function parallaxPosition(e){
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        // only when in range
        if(bottomWindow > top && topWindow < bottom){
            var imgW = path.data("resized-imgW");
            var imgH = path.data("resized-imgH");
            // min when image touch top of window
            var min = 0;
            // max when image touch bottom of window
            var max = - imgH + heightWindow;
            // overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
            // value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            // set background-position
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
$("#loginButton").click(function(){
    var username = $("#in_username")[0].value;
    var password = $("#in_password")[0].value;
    var json = JSON.stringify({
        "username": username,
        "password": password
    });
    jQuery.ajax({
        url: "http://182.254.216.232/restControl/login",
        type: "post",
        data: json,
        contentType: "application/json; charset=utf-8",
        success: function(msg) {
            //alert(msg);
            if(msg=="0"){
                // alert("welcome:"+username);
                localStorage.setItem("username",username);
                localStorage.setItem("password",password);
                $("#userinfo")[0].innerHTML="欢迎您，"+username+"!";
                $("#signup")[0].style.display="none";
                $("#userinfo")[0].style.display="";
                $("#geren")[0].style.display="";
            }else if(msg=="1"){
                alert("用户名或密码不正确！");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },
        complete: function(XMLHttpRequest, textStatus) {
            this; // 调用本次AJAX请求时传递的options参数
        }
    });
});
$("#registerButton").click(function(){
    var username = $("#zc_username")[0].value;
    var tel = $("#zc_tel")[0].value;
    var password = $("#zc_password")[0].value;
    var password2 = $("#zc_password2")[0].value;
    if(password!=password2) return;
    //var jsonStr = "{\"username\":"+"\""+username+"\""+",\"id\":"+"\""+username+Math.ceil(100)+"\""+",\"tel\":"+"\""+tel+"\""+",\"password\":"+"\""+password+"\""+"}";
    //var json = JSON.parse(jsonStr);
    var json = JSON.stringify({
        "username": username,
        "password": password,
        "tel":tel
    });
    //"{\"username\":\"geds\",\"id\":1001,\"tel\":\"1234567\",\"password\":\"123\"}"
    jQuery.ajax({
        url:"http://182.254.216.232/restControl/register",
        type:"post",
        data:json,
        contentType: "application/json; charset=utf-8",
        success:function(msg){
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            //localStorage.setItem("isstorePwd",isstorePwd);
            //localStorage.setItem("isautologin",isautologin);
            alert("注册成功，自动登录...");
            window.location.href ='index.html';

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },
        complete: function(XMLHttpRequest, textStatus) {
            this; // 调用本次AJAX请求时传递的options参数
        }
    });
});
$(document).ready(function(){
    // alert("ready");
    var storage = window.localStorage;
    var username = storage["username"];
    var password = storage["password"];
    if(""!=username&&null!=username){
        $("#userinfo")[0].innerHTML="欢迎您，"+username+"!";
        $("#signup")[0].style.display="none";
        $("#userinfo")[0].style.display="";
        $("#geren")[0].style.display="";
    }
});
if(!$("html").hasClass("touch")){
    $(window).resize(parallaxPosition);
    //$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}
