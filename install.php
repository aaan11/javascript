<?php
$path=__DIR__;
$title='Slideshow'; 
$extraCss = "";
$km = "kmom3";
$js;

include(__DIR__ . '/../mall/header.php');
echo "<div id='flash'><h1>Slideshow</h1>";
?>
<div class='nav'>
<ul>
	<li><a href='me.php'>About</a></li>
	<li><a href='index.php'>Preview the plugin</a></li>
	<li><a href='install.php'>Installation guide</a></li>
</ul>
</div>
<div>
<p>
First you have to download the <a href='http://www.student.bth.se/~aaan11/javascript/kmom7-10/js/projectPlugin.js'>jQuery plugin</a>
and then the <a href='http://www.student.bth.se/~aaan11/javascript/kmom7-10/css/projectPlugin.less'>stylesheet</a>.
</p>
<p>
Then enter this HTML element to your code.
<?php
echo "<pre><code>" . htmlspecialchars("<div class='slideShow'></div>") . "</code></pre>";
?>
<p>
<br/>
Then add the slideshow to your element.
<?php
echo "<pre><code>" . htmlspecialchars("$().slideShow({
	images: [
	{link:'imgUrl'},
	{link:'imgUrl'},
	{link:'imgUrl'}]
});") . "</code></pre>";
?>
</p>
<br/>
<p>
There are also some other settings that can be used.
<?php
echo "<pre><code>" . htmlspecialchars("slideInterval: 4000 			// How often to change image.
maxWidth: '580px' 			// Max width of an image.
maxHeight: '480px' 			// Max height of an image.
center: true 				// If image should be centered.
showToggleSlideshow: true 		// If the toogle slideshow should be shown.
") . "</code></pre>";
?>
</p>
<p>
Click <a href='http://www.student.bth.se/~aaan11/javascript/kmom7-10/index.php'>here</a> to see how it will look.
</p>
<?php include(__DIR__ . '/../mall/footer.php'); ?>