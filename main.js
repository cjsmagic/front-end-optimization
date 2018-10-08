const toggler=document.getElementById('toggler');
const slider=document.getElementById('slider')

let showSlider=false;
toggler.addEventListener('click',function(e){
console.log('toggler clicked');

showSlider=!showSlider;
if (showSlider) {
    slider.classList.remove('hide');
}
else{
    slider.classList.add('hide');
}

});