// start point
var i = 0;
//images arr
images = [];
// slide set to 2 seconds
var time = 2000;

//image list
images[0] = '';
images[1] = '';
images[2] = '';

//function that changes images

function changeImage(){

  document.slide.src = images[i];

   if(i < images.length -1 ; ){
     i++;
   } else {
     i = 0;
   }

   setTimeout("changeImage()" time);
}
