//Slideshow
(function ($) {
$.fn.slideShow = function(options) {
	var settings = $.extend({
		images: [
				{link: 'img/someimg.png'},
				{link: 'img/anotherimg.png'}
				],
		slideInterval: 4000,
		maxWidth: '580px',
		maxHeight: '480px',
		center: true,
		showToggleSlideshow: true,
		useThumb: true,
		useLightbox: true
        }, options),
		
		showToggleSlideshow = settings.showToggleSlideshow,
		images = settings.images,
		maxWidth = settings.maxWidth;
		maxHeight = settings.maxHeight;
		center = settings.center;
		slideInterval = settings.slideInterval,
		useThumb = settings.useThumb,
		useLightbox = settings.useLightbox,
		paused = false;
	
function initSlides() {
	var currentImage = new Image(),
		imagesDiv = document.createElement('div'),
		thumb = document.createElement('div'),
		button = document.createElement('div'),
		anImage;
	
	currentImage.setAttribute('class', 'slideshow-current-image');
	imagesDiv.setAttribute('class', 'images');
	thumb.setAttribute('class', 'thumbs');
	button.setAttribute('class', 'toggleSlide');
	button.innerHTML = 'Toggle slideshow, currently running.';
	
	$('.slideShow').append(currentImage);
	$('.slideShow').append(imagesDiv);
	$('.slideShow').append(thumb);
	if(showToggleSlideshow) {
		$('.slideShow').append(button);
	}
	
	images.forEach(function(entry) {
		anImage = new Image();
		anImage.setAttribute('src', entry.link);
		$('.images').append(anImage);
	});
	
	setImages();
	if(useThumb) {
		setThumb();
	}
	
	$('.toggleSlide').click(function() {
		if(paused) {
			interval = setInterval(function() {nextImage()}, slideInterval);
			paused = false;
			$('.toggleSlide').html('Toggle slideshow, currently running.');
			console.log("Slideshow unpaused");
		} else {
			clearInterval(interval);
			paused = true;
			$('.toggleSlide').html('Toggle slideshow, currently paused.');
			console.log("Slideshow paused");
		}
	});
}

function setThumb() {
	var anImage;
	
	$('.images img').each(function(img) {
		addThumb($(this).attr('src'), $(this).attr('id'))
	});
	
	$('.thumbs div').click(function() {
		jumpTo($(this).children('img').attr('id'));
		if(!paused) {
			clearInterval(interval);
			interval = setInterval(function() {nextImage()}, slideInterval);
		}
	});
}

function addThumb(src, id) {
	var anImage = new Image(),
		imgWrap = document.createElement('div');
		
	imgWrap.setAttribute('id', 'imgWrap');
	anImage.src = src;
	anImage.id = id;
	
	imgWrap.appendChild(anImage);
	
	$('.thumbs').append(imgWrap);
}

function setImages() {
	var counter = 0,
		currentImage = $('.slideshow-current-image');
	
	console.log('Setting images');
	
	$('.images img').each(function() {
		$(this).attr('id', counter);
		counter++;
	});
		
	$('.images').css('display', 'none');
	currentImage.css("max-width", maxWidth);
	currentImage.css("max-height", maxHeight);
	if(center == true) {
		currentImage.css('display', 'block');
		currentImage.css('margin-left', 'auto');
		currentImage.css('margin-right', 'auto');
	}
	
	currentImage.attr('src', $('#0').attr('src'));
	currentImage.attr('data', 0);
	
	interval = setInterval(function() {nextImage()}, slideInterval);
	
	if(useLightbox) {
		currentImage.click(function() {
			clearInterval(interval);
			lightBox(currentImage);
		});
	}
}

function jumpTo(id) {
	var currentImage = $('.slideshow-current-image');
	
	currentImage.hide();
	currentImage.attr('src', $('.images #' + id).attr('src'));
	currentImage.attr('data', id);
	currentImage.fadeIn();	
}
	
function nextImage() {
	var nrOfImages,
		idToGet,
		currentImage = $('.slideshow-current-image');
	
	idToGet = parseInt(currentImage.attr('data')) + 1;
	nrOfImages = $('.images img').size();
	
	if(idToGet != nrOfImages) {
		currentImage.attr('data', idToGet);
	} else {
		idToGet = 0;
		currentImage.attr('data', 0);
	}
		
	currentImage.hide();
	currentImage.attr('src', $('.images #' + idToGet).attr('src'));
	currentImage.fadeIn();
}
	
function lightBox(image) {
    var windowHeigth = window.innerHeight || $(window).height(),
        windowWidth  = window.innerWidth  || $(window).width();

    $('<div id="overlay"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.9'}, 'slow')
      .appendTo('body');
    
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
    
    $('<img>')
      .attr('src', image.attr('src'))
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })
      .load(function() {
        $('#lightbox')
          .css({
            'top':  (windowHeigth - $('#lightbox').height()) / 2,
            'left': (windowWidth  - $('#lightbox').width())  / 2
          })
          .fadeIn();
      })
      .appendTo('#lightbox');
      
      $('#overlay, #lightbox').click(function() {
        $('#overlay, #lightbox').remove();
		interval = setInterval(function() {nextImage()}, slideInterval);
      });
    
    console.log("Display image in lightbox.");
};
    
	initSlides();
}}(jQuery));