let inputMin = document.querySelector('.min-input');
let inputMax = document.querySelector('.max-input');
inputMin.addEventListener('input', actualizarSlider);
inputMax.addEventListener('input', actualizarSlider);

let sliderMin = document.querySelector('.min-range');
let sliderMax = document.querySelector('.max-range');

function actualizarSlider(event) {
    let element = event.target;
    if (element.className = '.min-input') {
        if (element.value >= sliderMin.min && element.value < sliderMax.value) {
            sliderMin.value = element.value;
        } else {
            sliderMin.value = sliderMin.min;
        }
    } else {
        if (element.value <= sliderMax.max && element.value > sliderMin.value) {
            sliderMin.value = element.value;
        } else {
            sliderMin.value = sliderMin.min;
        }
    }
}
