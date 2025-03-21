let sliders = document.querySelectorAll('.img-slider');
console.log(sliders)
let count = 0;


sliders.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function sliderImage() {
    sliders.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}

function prev() {
    count--; 
    if (count < 0) {
        count = sliders.length - 1; 
    }
    sliderImage();
}

function next() {
    count++;
    if (count >= sliders.length) {
        count = 0; 
    }
    sliderImage();
}


setInterval(next, 2000);
