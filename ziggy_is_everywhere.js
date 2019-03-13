
const photos= ["https://ziggy.akeneo.com/assets/images/ziggy/sport3.JPG","https://ziggy.akeneo.com/assets/images/ziggy/adoption2.JPG","https://pbs.twimg.com/media/Ck8BsKzXEAAK1cY.jpg","https://scontent-atl3-1.cdninstagram.com/vp/d4c4c97929b1ab7f3988c130844e36cc/5D03F583/t51.2885-15/e35/41724500_725044884511840_2148682439255236590_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com","https://ziggy.akeneo.com/assets/images/ziggy/sport4.JPG","https://ziggy.akeneo.com/assets/images/ziggy/education1.JPG","https://pbs.twimg.com/media/Dbo47EWU8AAlfi3.jpg","https://ziggy.akeneo.com/assets/images/ziggy/feeding1.JPG","https://pbs.twimg.com/media/Dbo47EWU8AAlfi3.jpg","https://pbs.twimg.com/media/DbbvTQiVMAAcYna.jpg", "https://ziggy.akeneo.com/assets/images/ziggy/theziggy1.JPG"];
var imgTags = document.getElementsByTagName("img");


for(var i = 0; i < imgTags.length; i++) {
  var randomPic = photos[Math.floor(Math.random()*photos.length)];
  imgTags[i].src = randomPic;
} 

