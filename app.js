// start point
var i = 0;
//images arr
images = [];
// slide set to 2 seconds
var time = 2000;

//image list
images[0] = 'images/cat.jpg';
images[1] = 'images/cat2.jpg';
images[2] = 'images/cat3.jpg';

//function that changes images

function changeImage(){

  document.slide.src = images[i];

   if(i < images.length -1 ){
     i++;
   } else {
     i = 0;
   }

   setTimeout("changeImage()" , time);
}

window.onload = changeImage;
