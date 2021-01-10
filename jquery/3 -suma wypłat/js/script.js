


// $(document).ready(function () {
//     $('#count-sum').click(function () {

//         // let sum = 0;
//         // for (let i = 0; i < $('.salary').text().length; i++) {
//         //     // ($('.salary').text())[i];

//         //     // sum += $('.salary').text().


//         //     console.log($('.salary').text().Number(i));

//         $('#sum').innerHTML = 100;
//     }
//         // let salaryText = $('.salary').text();
//         // console.log(salaryText);
//         // });
//     // });
// });
// })


$(document).ready(function () {
    $('#count-sum').click(function () {

        sum = $('.salary').text();
        console.log($('.salary').text());
        console.log(sum);
        $('#sum').text(sum);
    })
});

// })

