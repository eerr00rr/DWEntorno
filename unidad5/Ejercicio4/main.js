let enlaces = document.getElementsByTagName('a');

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].href = enlaces[i].href.replace('http://', 'https://');
    if (enlaces[i].className === 'importante') {
        enlaces[i].setAttribute('name', `importante+${i}`)
    }
}

let classes = document.getElementsByTagName('p');

for (let i = 0; i < classes.length; i++) {
    if (classes[i].className === 'importante') {
        classes[i].className = 'resaltado';
    } else {
        classes[i].classList.add('normal');
    }
}