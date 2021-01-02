
let newsletterForm = document.getElementById('newsletter-form');
console.log(newsletterForm);
let allAgreeChx = document.getElementById('all-agree');
console.log(allAgreeChx);

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');
    errors.innerHTML = '';
    console.log(txtName);
    console.log(txtEmail);
    console.log(agree1);
    console.log(errors);

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko !';
        console.log(liError);
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail !';
        console.log(liError);
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @ !';
        console.log(liError);
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś Zgody marketingowej 1!';
        console.log(liError);
        errors.appendChild(liError);
    }

    console.log(errors.children.length);
    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    // console.log(event.target.checked);
    agree1.checked = event.target.checked
    agree2.checked = event.target.checked
    console.log(event);
    agree1.disabled = event.target.checked
    agree2.disabled = event.target.checked
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);

