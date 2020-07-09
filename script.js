let slider = document.querySelector('.slider'),
    slidesContainer = slider.querySelector('.slides_container'),
    slide = slider.querySelector('.slide');

let startPoint = 0,
    move = 0,
    alreadyMoved = 0,
    isDown = false,
    slideWidth = slide.offsetWidth,
    slidesQty = slidesContainer.children.length - 1,
    slidesWidth = slidesQty * slideWidth + (slidesQty - 1) * 20;

slider.addEventListener('mousedown', ()=>{
    startPoint = event.pageX - slider.offsetLeft;
    alreadyMoved = +slidesContainer.style.transform.replace(/[^\d.]/g, '');
    isDown = true;
})

slider.addEventListener('mouseup', ()=>{
    endPoint = event.pageX - slider.offsetLeft;
    isDown = false;
})

slider.addEventListener('mouseleave', ()=>{
    endPoint = event.pageX - slider.offsetLeft;
    isDown = false;
})

slider.addEventListener('mousemove', ()=>{
    if(!isDown) return;
    
    move = event.pageX - slider.offsetLeft - startPoint;

    if(!(alreadyMoved - move < 0 || alreadyMoved - move > slidesWidth)){
        slidesContainer.style.transform = 'translateX(' + -(alreadyMoved - move) +'px)';
    }
})