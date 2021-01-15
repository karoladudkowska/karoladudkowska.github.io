let endOfThePage = 0;
// ile razy przescrollowalismy do końca strony

let preloading = false;

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`showPreloader()`);
    preloader.style.display = 'block';
    preloading = true;

}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`hidePreloader()`);
    preloader.style.display = 'none';
    preloading = false;

}

const getData = () => {
    // console.log('get data');
    if (!preloading) {

        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                for (let user of data) {
                    let pId = document.createElement('p');
                    let pUserName = document.createElement('p');
                    let pURL = document.createElement('p');

                    pId.innerText = `User Id: ${user.id}`
                    pUserName.innerText = `User Name: ${user.name}`
                    pURL.innerHTML = `User URL: ${user.website}<br />--------`;

                    body.appendChild(pId);
                    body.appendChild(pUserName);
                    body.appendChild(pURL);
                }


                hidePreloader();

            })
            .catch(error => {
                console.log(error);

            })
    }
}

const scrollToEndOfPage = () => {
    console.log('scroll');

    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);
    console.log(sumScrollTopClientHeight);
    // Math.ceil()zaokraglenie w górę

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(``);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`=======================`);


    if (sumScrollTopClientHeight >= scrollHeight) {
        endOfThePage += 1;
        console.log(`scroll to the end of page ${endOfThePage}`);

        getData();
    }

}

window.addEventListener('scroll', scrollToEndOfPage);




