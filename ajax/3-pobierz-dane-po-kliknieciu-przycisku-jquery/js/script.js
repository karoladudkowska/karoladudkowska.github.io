$(document).ready(function () {

    console.log("jquery");
    $('#getData').click(function () {
        console.log("click");

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                console.log(data);

                let pId = $('<p></p>').text(`POST ID ${data.id}`);
                console.log(pId);
                let pUserId = $('<p></p>').text(`POST USER ID ${data.userId}`);
                let pTitle = $('<p></p>').text(`POST TITLE ${data.title}`);
                let pBody = $('<p></p>').text(`POST BODY: ${data.body}`);
                let hr = $('<hr />');

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })
            .fail(function (error) {
                console.error(error);

            });

    });

})

//     console.log("jquery");
//     $('#getData').click(function () {
//         console.log("click");

//         $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
//             .done(function (data) {
//                 console.log(data);

//                 let pId = $('<p></p>').text(`POST ID ${data.id}`);
//                 console.log(pId);
//                 let pUserId = $('<p></p>').text(`POST USER ID ${data.userId}`);
//                 let pTitle = $('<p></p>').text(`POST TITLE ${data.title}`);
//                 let pBody = $('<p></p>').text(`POST BODY: ${data.body}`);
//                 let hr = $('<hr />');

//                 let jqBody = $('body');

//                 jqBody.append(pId);
//                 jqBody.append(pUserId);
//                 jqBody.append(pTitle);
//                 jqBody.append(pBody);
//                 jqBody.append(hr);
//             })
//             .fail(function (error) {
//                 console.error(error);

//             });

//     })


// })




