<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="shortcut icon" type="../image/x-icon" href="../images/logo.png" media="screen" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>新增博客-牧羊犬Code</title>
    <meta name="keywords" content="牧羊犬Code, 博客中心, CSS, HTML" />
    <meta name="description" content="牧羊犬Code-博客中心" />

    <!-- CSS Files -->
    <link href="../../css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="../../css/animate.css" rel="stylesheet" media="screen">

    <link href="../css/blogEdit.css" rel="stylesheet" type="text/css" />
    <link href="../css/editormd.css" rel="stylesheet" type="text/css" />

    <!-- Google Fonts -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic" />


</head>
<body>

<div id="tmeplatemo_container">
    <div id="templatemo_header_01">
        <button id="fabiaoBtn" class="btn btn-danger">
            <span class="glyphicon glyphicon-check"></span>
            发表博客
        </button>
    </div>	<!-- end of header -->

    <div id="tmeplatemo_content">

        <div id="templatemo_main_column">

            <div class="header_01">
                <p style="align-content: center;">${title}</p>
                <p style="align-content: flex-end">——${username}</p>
            </div>

            <!--博客正文-->
            <div id="content">
                ${content}
            </div>
        </div>

        <div class="cleaner"></div>
    </div> <!-- end of content -->

    <div id="templatemo_footer">

        Copyright © 2015 <a href="#">牧羊犬Code</a> | 推荐产品 <a href="http://www.shzhyun.com" target="_blank">数智云金融</a>

        <div class="margin_bottom_20"></div>

        <a href="#"><img style="border:0;width:88px;height:31px" src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" vspace="8" border="0" /></a>
        <a href="#"><img style="border:0;width:88px;height:31px"  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" vspace="8" border="0" /></a>

    </div> <!-- end of footer -->

</div> <!-- end of container -->
<!-- /.javascript files -->
<script src="../../js/jquery.js"></script>
<script src="../../js/bootstrap.min.js"></script>
<script src="../js/editormd.js"></script>
<script src="../js/blog.js"></script>

</body>
</html>