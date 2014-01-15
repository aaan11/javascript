<?php
$path=__DIR__;
$title='SlideshowPlugin'; 
$extraCss = "<link rel='stylesheet/less' type='text/css' href='css/projectPlugin.less'>";
$km = "kmom7-10";
$js = array();
$js[0] = 'projectPlugin.js';
$js[1] = 'main.js';

include(__DIR__ . '/../mall/header.php');
?>

<div id='flash'>
<h1>Slideshow Plugin</h1>
<div class='nav'>
<ul>
	<li><a href='me.php'>About</a></li>
	<li><a href='index.php'>Preview the plugin</a></li>
	<li><a href='install.php'>Installation guide</a></li>
</ul>
</div>
<div class='slideShow'>
</div>

<?php include(__DIR__ . '/../mall/footer.php'); ?>