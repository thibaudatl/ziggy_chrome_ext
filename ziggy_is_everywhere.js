
(function(){
	var nbImages = 0;
	setInterval(function(){
		var newnbimages = checkNbImagesOnPage();
		if( newnbimages !== nbImages ){
			replaceImages(0, returnsAllImagesOnPage());
			nbImages = newnbimages
		}

	}, 2000)
	const photos= ["https://ziggy.akeneo.com/assets/images/ziggy/adoption2.JPG", "https://ziggy.akeneo.com/assets/images/ziggy/adoption3.JPG","https://ziggy.akeneo.com/assets/images/ziggy/adoption1.JPG","https://ziggy.akeneo.com/assets/images/ziggy/adoption4.JPG","https://ziggy.akeneo.com/assets/images/ziggy/sport1.JPG","https://ziggy.akeneo.com/assets/images/ziggy/sport2.JPG","https://ziggy.akeneo.com/assets/images/ziggy/sport3.JPG","https://ziggy.akeneo.com/assets/images/ziggy/sport4.JPG","https://ziggy.akeneo.com/assets/images/ziggy/sport5.JPG","https://ziggy.akeneo.com/assets/images/ziggy/education1.JPG","https://ziggy.akeneo.com/assets/images/ziggy/feeding1.JPG","https://ziggy.akeneo.com/assets/images/ziggy/theziggy1.JPG"
	];
	
	var imgTags = document.getElementsByTagName("img");
	
	replaceImages(nbImages, imgTags)

	function replaceImages(startingPoint, imgTags){
		for(var i = imgTags.length - 1 ; i >= startingPoint ;  i--) {
			if(imgTags[i].src.indexOf("ziggy") == -1){
			  	var randomPic = photos[Math.floor(Math.random()*photos.length)];
			  	imgTags[i].src = randomPic;
			}
		}
	}

	function checkNbImagesOnPage(){
		return returnsAllImagesOnPage().length;
	}

	function returnsAllImagesOnPage(){
		return document.getElementsByTagName("img");
	}
})()