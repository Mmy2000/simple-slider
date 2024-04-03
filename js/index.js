var imgList =Array.from( document.querySelectorAll('.item img'))
var lightboxContainer = document.querySelector('.ligthbox-container')
var lightboxItem = document.querySelector('.ligthbox-item')
var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev')
var closeBtn = document.getElementById('close')
var currentImageIndex;


for (let i = 0; i < imgList.length; i++) {
   imgList[i].addEventListener('click' , function (e) {
    lightboxContainer.classList.replace('d-none' , 'd-flex')
    currentImageIndex = imgList.indexOf(e.target)
    var imgSrc = e.target.getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`
   })
}
function Slide(step) {
   currentImageIndex = currentImageIndex + step
   if (currentImageIndex == imgList.length) {
      currentImageIndex = 0
   }
   if (currentImageIndex <0) {
      currentImageIndex = imgList.length-1;
   }
   var imgSrc = imgList[currentImageIndex].getAttribute('src')
   lightboxItem.style.backgroundImage = `url(${imgSrc})`
}
document.addEventListener('keydown' , function (e) {
   if (e.key == 'ArrowRight') {
      Slide(1)
   }
   else if(e.key == 'ArrowLeft'){
      Slide(-1)
   }
   else if(e.key == 'Escape'){
      Close()
   }
})
function Close() {
   lightboxContainer.classList.replace('d-flex' , 'd-none')
}
// function nextSlide() {
//    currentImageIndex++;
//    if (currentImageIndex == imgList.length) {
//       currentImageIndex = 0
//    }
   
//    var imgSrc = imgList[currentImageIndex].getAttribute('src')
//    lightboxItem.style.backgroundImage = `url(${imgSrc})`
// }
// function prevSlide() {
//    currentImageIndex--;
//    if (currentImageIndex <0) {
//       currentImageIndex = imgList.length-1;
//    }
   
//    var imgSrc = imgList[currentImageIndex].getAttribute('src')
//    lightboxItem.style.backgroundImage = `url(${imgSrc})`
// }
nextBtn.addEventListener('click' , function(){Slide(1)})
prevBtn.addEventListener('click' , function(){Slide(-1)})
closeBtn.addEventListener('click' , Close)