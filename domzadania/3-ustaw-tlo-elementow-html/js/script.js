let first = document.getElementById('firstP');
let second = document.getElementById('secondP');

console.log(document);
const changeColor = () => {

    first.style.background = 'red';
}

let btn = document.getElementById('change');
// btn.onclick = changeColor;
btn.addEventListener('click', changeColor);
