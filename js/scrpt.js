
var imgs =Array.from( document.querySelectorAll("img"));
var conatiner_image = document.querySelector(".conatiner_image");
var captipn_conatiner_image = document.querySelector(".captipn_conatiner_image");
var next = document.getElementById("next");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var currentIndex = 0;

console.log(conatiner_image);
for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click",function(e){
        conatiner_image.style.display="flex";
        var srcImg = e.target.src;
        captipn_conatiner_image.style.backgroundImage=`url(${srcImg})`;
        currentIndex =imgs.indexOf(e.target)
         console.log(currentIndex);



      

    })
}



function nextSlide()
{
currentIndex =currentIndex +1;
if(currentIndex >imgs.length -1)
{
    currentIndex=0;
}else{
    mySrc = imgs[currentIndex].src;
    captipn_conatiner_image.style.backgroundImage=`url(${mySrc})`;
}


}

function prefSlid(){
currentIndex = currentIndex -1;
if(currentIndex < 0)
{
    currentIndex =imgs.length-1;
}
else{
    mySrc = imgs[currentIndex].src;
    captipn_conatiner_image.style.backgroundImage=`url(${mySrc})`;
}

}



document.addEventListener("keydown",function(e){
  if(e.code == 'ArrowRight'){
    nextSlide();
  }else if(e.code == 'ArrowLeft')
     {
        prefSlid();
     }else if(e.code == 'Escape')
     {
        conatiner_image.style.display="none";  
     }

})


next.addEventListener("click",function(){
    nextSlide();
})

prev.addEventListener("click",function(){
    prefSlid();
}) 

close.addEventListener("click",function(){

    conatiner_image.style.display="none";

})
