const btn = document.getElementById('text');
btn.addEventListener('click', addText);

let text = document.getElementById('changeText');

function addText() {
    btn.remove();
    text.innerText += ' What? ';
    text.textContent += 'пока не поздно';
    text.innerHTML += '<h3 style="color: red;">Что то ещё?</h3>'
}