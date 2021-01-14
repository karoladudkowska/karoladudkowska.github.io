let programmer = document.createElement('div');
document.body.appendChild(programmer);
programmer.setAttribute('id', 'dane-programisty');
let button = document.querySelector('button');

const getUser = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {
        mode: 'cors',
        method: 'GET',

    })
        .then(res => res.json())
        .then(data => {

            console.log("click");
            let programmerH1 = document.createElement("h1");
            let pName = document.createElement("p");
            let pSurname = document.createElement("p");
            let pOccupation = document.createElement("p");
            let pCompany = document.createElement("p");

            programmer.appendChild(programmerH1);
            programmer.appendChild(pName);
            programmer.appendChild(pSurname);
            programmer.appendChild(pOccupation);
            programmer.appendChild(pCompany);

            programmerH1.innerText = "dane programisty"
            pName.innerText = `IMIĘ: ${data.imie}`;
            pSurname.innerText = `NAZWISKO: ${data.nazwisko}`;
            pOccupation.innerText = `ZAWÓD: ${data.zawod}`;
            pCompany.innerText = `FIRMA: ${data.firma}`;

        })
        .catch(error => {
            console.error(error);

        })
}

button.addEventListener('click', getUser);



