const fileInput = document.getElementById('csv');

fileInput.addEventListener('change', e => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = e => {
            console.log(e.target.result);
        };

        reader.readAsText(file);
    }
});