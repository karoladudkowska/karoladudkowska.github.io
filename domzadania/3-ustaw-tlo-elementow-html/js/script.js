const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.classList.add('bgRed');
    p2.classList.add('bgYellow')
}

let btn = document.getElementById('setBackground');

btn.addEventListener('click', setBackground);

// lub 2 sposób

// const setBackground = () => {
//     let p1 = document.querySelector('.first');
//     let p2 = document.querySelector('.last');

//     p1.style.background = 'red';
//     p2.style.background = 'yellow';
// }

// let btn = document.getElementById('setBackground');

// btn.addEventListener('click', setBackground);






// lub 3 sposób


// let first = document.getElementById('firstP');
// let second = document.getElementById('secondP');

// console.log(document);
// const setBackground = () => {

//     first.style.background = 'red';
//     second.style.background = 'yellow';
// }

// let btn = document.getElementById('setBackground');

// btn.addEventListener('click', setBackground);

