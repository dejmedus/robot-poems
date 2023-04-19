const lion = document.getElementById('lion');

const lionText = "- huggingface g/f-t-x";
const huggingFace = `<span class="hugging-face">🤗</span>`

lion.addEventListener('mouseenter', () => {
    lion.innerHTML = huggingFace;
})

lion.addEventListener('mouseleave', () => {
    lion.innerHTML = lionText;
})