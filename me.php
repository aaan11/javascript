<?php
$path=__DIR__;
$title='SlideshowPlugin'; 
$extraCss = "<link rel='stylesheet/less' type='text/css' href='css/projectPlugin.less'>";
$km = "kmom7-10";
$js = array();

include(__DIR__ . '/../mall/header.php');
?>

<div id='flash'>
<h1>Me page for slideshow plugin</h1>
<div class='nav'>
<ul>
	<li><a href='me.php'>About</a></li>
	<li><a href='index.php'>Preview the plugin</a></li>
	<li><a href='install.php'>Installation guide</a></li>
</ul>
</div>
<div class='about'>
<b>What is slideshow plugin</b><br/><br/>
Slideshow plugin is an jQuery plugin for slideshow, gallery and lightbox built in to one.<br/>
With various settings to edit it as wanted.
<br/><br/>
<b>Why use it</b><br/><br/>
It's an easy plugin to use and easy to edit it to the way you want it.<br/>
As to compare against other sliders, it's hard to say it can be compared to <a href='http://wowslider.com/'>this one</a>.
</div>

<?php include(__DIR__ . '/../mall/footer.php'); ?>