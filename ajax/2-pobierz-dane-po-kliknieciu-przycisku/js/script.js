
let button = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php', {
        mode: 'cors',
        method: 'GET',

    })
        .then(res => res.json())
        .then(data => {

            // console.log(resJSON);
            let form = document.createElement("form");
            document.body.appendChild(form);
            let inputIdUser = document.createElement("input");
            let inputId = document.createElement("input");
            let textareaTitle = document.createElement("textarea");
            let titleCols = textareaTitle.setAttribute("cols", 50);
            textareaTitle.style.display = "block";
            let textareaContentPost = document.createElement("textarea");
            let contentPostCols = textareaContentPost.setAttribute("cols", 50);
            textareaContentPost.style.display = "block";
            let hr = document.createElement("hr");

            form.appendChild(inputIdUser);
            form.appendChild(inputId);
            form.appendChild(textareaTitle);
            form.appendChild(textareaContentPost);
            document.body.appendChild(hr);

            inputIdUser.value = `POST  User ID: ${data.userId}`;
            inputId.value = `POST ID: ${data.id}`;
            textareaTitle.value = `POST TITLE: ${data.title}`;
            textareaContentPost.value = `POST BODY: ${data.body}`;
        })
        .catch(error => {
            console.error(error);

        })
}

button.addEventListener('click', getData);


