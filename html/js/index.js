
    <!-- 百度统计 -->
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
//      hm.src = "https://hm.baidu.com/hm.js?d117cfec38387885bfd83e9662c63931";
      hm.src = "https://hm.baidu.com/hm.js?05c28c4dd8bc08e88d24c1d38e39497b";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    /**
 * Created by Administrator on 2017/7/5 0005.
 */

$("#loginButton").click(function(){
    debugger;
    var username = $("#in_username")[0].value;
    var password = $("#in_password")[0].value;
    var json = JSON.stringify({
        "username": username,
        "password": password
    });
    jQuery.ajax({
        url: "http://www.haveideal.club/restControl/login",
        type: "post",
        data: json,
        contentType: "application/json; charset=utf-8",
        success: function(msg) {
            //alert(msg);
            if(msg=="0"){
                // alert("welcome:"+username);
                // localStorage.setItem("username",username);
                // localStorage.setItem("password",password);
                sessionStorage.setItem("username",username);
                sessionStorage.setItem("password",password);
                // $("#userinfo")[0].innerHTML="欢迎您，"+username+"!";
                $("#signup")[0].style.display="none";
                // $("#userinfo")[0].style.display="";
                $("#geren")[0].style.display="";
                $("#gerenzhongxin")[0].style.display="";
                window.open ('index.html')
            }else if(msg=="1"){
                alert("用户名或密码不正确！");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
//            alert(XMLHttpRequest.status);
//            alert(XMLHttpRequest.readyState);
//            alert(textStatus);
        },
        complete: function(XMLHttpRequest, textStatus) {
            this; // 调用本次AJAX请求时传递的options参数
        }
    });
});
$("#registerButton").click(function(){
    debugger;
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
        url:"http://www.haveideal.club/restControl/register",
        type:"post",
        data:json,
        contentType: "application/json; charset=utf-8",
        success:function(msg){
            sessionStorage.setItem("username",username);
            sessionStorage.setItem("password",password);
            //localStorage.setItem("isstorePwd",isstorePwd);
            //localStorage.setItem("isautologin",isautologin);
            alert("注册成功，自动登录...");
            window.location.href ='index.html';

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
//            alert(XMLHttpRequest.status);
//            alert(XMLHttpRequest.readyState);
//            alert(textStatus);
        },
        complete: function(XMLHttpRequest, textStatus) {
            this; // 调用本次AJAX请求时传递的options参数
        }
    });
});
$(document).ready(function(){
    // alert("ready");
    // var storage = window.localStorage;
    var storage = window.sessionStorage;
    var username = storage["username"];
    var password = storage["password"];
    if(""!=username&&null!=username){
        $("#userinfo")[0].innerHTML="欢迎您，"+username+"!";
        $("#signup")[0].style.display="none";
        // $("#userinfo")[0].style.display="";
        $("#geren")[0].style.display="";
        $("#gerenzhongxin")[0].style.display="";
    }
});
if(!$("html").hasClass("touch")){
    $(window).resize(parallaxPosition);
    //$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}
/*
 bootstrap table*/
/*初始化table数据*/
$(function(){
    var storage = window.sessionStorage;
    var username = storage["username"];
    var json = JSON.stringify({
        "loanName": "",
        "loanPersonId": username
    });
    jQuery.ajax({
        url:"http://www.haveideal.club/restControl/queryLoans",
        type:"post",
        data:json,
        contentType: "application/json; charset=utf-8",
        success:function(data){
            $("#loanRecordTable").bootstrapTable({
                data:data,
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
//            alert("服务器繁忙，请稍后重试!");
            // alert(XMLHttpRequest.status);
            // alert(XMLHttpRequest.readyState);
            // alert(textStatus);
        },
        complete: function(XMLHttpRequest, textStatus) {
            this; // 调用本次AJAX请求时传递的options参数
        }
    });

    jQuery.ajax({
        url:"http://www.haveideal.club/restControl/queryLends",
        type:"post",
        data:"param",
        contentType: "application/json; charset=utf-8",
        success:function(data){
            $("#lendRecordTable").bootstrapTable({
                data:data,
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
//            alert("服务器繁忙，请稍后重试!");
        },
        complete: function(XMLHttpRequest, textStatus) {
            this; // 调用本次AJAX请求时传递的options参数
        }
    });
});
$('.dropdown-toggle').dropdown();
$('#exitBtn').click(function(){
    var storage = window.sessionStorage;
    storage.clear();
});
function iosClick() {
    alert('敬请期待');
}
/*$(function () {
   $("[data-toggle='popover']").popover();
});*/

$('#gttzBtn').popover({
    trigger : 'hover',//鼠标以上时触发弹出提示框
    html:true,//开启html 为true的话，data-content里就能放html代码了
    content:"<img src='/images/zhifubao/xbdq.png'>"
});

$('#qrtzBtn').popover({
    trigger : 'hover',//鼠标以上时触发弹出提示框
    html:true,//开启html 为true的话，data-content里就能放html代码了
    content:"<img src='/images/weixin/0.1.png'>"
});

$('#qrtzBtn').click(function() {
    var username = $("#in_username")[0].value;
    var password = $("#in_password")[0].value;
    var json = JSON.stringify({
        "username": username,
        "password": password
    });
});

$('#qrjdBtn').popover({
    trigger : 'hover',//鼠标以上时触发弹出提示框
    html:true,//开启html 为true的话，data-content里就能放html代码了
    content:"<img src='/images/weixin/0.1.png'>"
});