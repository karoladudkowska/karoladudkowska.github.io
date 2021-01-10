$(document).ready(function () {

    const button1 = $('<button>Przenieś ostatni p na pierwszą pozycje</button>');
    console.log(button1);
    $('body').prepend(button1);
    const button2 = $('<button>Przenieś pierwszy p na ostatnią pozycje</button>');
    console.log(button2);
    $('body').prepend(button2);

    let number = 0;

    for (i = 0; i < 5; i++) {

        $(button1).after('<p></p>');
        $('p').addClass('paragraph');

    }

    $('.paragraph').each(function () {

        number = number + 1;
        $(this).text(`To jest paragraf ${number}`)
    })

    $(button1).click(function () {

        console.log("klik");
        $('p:last').insertBefore($('p:first'));

    })

    $(button2).click(function () {

        console.log("klik");
        $('p:first').insertAfter($('p:last'));

    })
});