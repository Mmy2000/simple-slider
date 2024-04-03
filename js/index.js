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

function nextSlide() {
   if (currentImageIndex == imgList.length-1) {
      currentImageIndex = 0
   }
   currentImageIndex++;
   var imgSrc = imgList[currentImageIndex].getAttribute('src')
   lightboxItem.style.backgroundImage = `url(${imgSrc})`
}
nextBtn.addEventListener('click' , nextSlide)