const tagOptions = [
    "p", "h1", "h2",
    "h3", "h4", "h5",
    "h6", "span",
];

const inputParagraphs = document.querySelector('#paragraphs');
const paragraphsValue = document.querySelector('#paragraphsValue');
const inputWords = document.querySelector('#words');
const wordsValue = document.querySelector('#wordsValue');
const selectTags = document.querySelector('#tags');
const selectInclude = document.querySelector('#include');
const output = document.querySelector('.output');
const button = document.querySelector('#generate');

inputParagraphs.addEventListener('input', updateInputValue);
inputWords.addEventListener('input', updateInputValue);
button.addEventListener('click', generateLoremIpsum);

function generateLoremIpsum() {
    console.log(inputParagraphs.value);
    const paragraphs = parseInt(inputParagraphs.value);
    const wordsPerParagraph = parseInt(inputWords.value);
    const tag = selectTags.value;
    const html = selectInclude.value;

    const loremIpsumText = generateText(
        paragraphs,
        wordsPerParagraph,
        tag,
        html
    );
    displayLoremIpsum(loremIpsumText);
}

function generateText(paragraphs, wordsPerParagraph, tag, html) {
    const loremIpsumArray = new Array(paragraphs).fill("");
    for (let i = 0; i < paragraphs; i++) {
        const words = generateWords(wordsPerParagraph);
        loremIpsumArray[i] = html === "Yes" ? `<${tag}>${words}</${tag}>` : words;
    }
    return loremIpsumArray.join('\n');
}

function generateWords(numWords) {
    const loremIpsumText =
        `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;
    const words = loremIpsumText.split(' ');
    if (numWords <= words.length) {
        return words.slice(0, numWords).join(" ");
    } else {
        return words.join(" ");
    }
}

function displayLoremIpsum(text) {
    output.innerHTML = "";
    output.innerHTML = text;
}

function updateInputValue(e) {
    if (e.target === inputParagraphs) {
        paragraphsValue.textContent = inputParagraphs.value;
    }
    if (e.target === inputWords) wordsValue.textContent = inputWords.value;
}

function createTagOptions() {
    tagOptions.forEach(value => {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = `<${value}>`;

        selectTags.appendChild(option);
    });
}

createTagOptions();


