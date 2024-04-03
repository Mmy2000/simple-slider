var imgList =Array.from( document.querySelectorAll('.item img'))
var lightboxContainer = document.querySelector('.ligthbox-container')
var lightboxItem = document.querySelector('.ligthbox-item')

for (let i = 0; i < imgList.length; i++) {
   imgList[i].addEventListener('click' , function (e) {
    lightboxContainer.classList.replace('d-none' , 'd-flex')
    var currentImageIndex = imgList.indexOf(e.target)
    var imgSrc = e.target.getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`
   })
    
}
