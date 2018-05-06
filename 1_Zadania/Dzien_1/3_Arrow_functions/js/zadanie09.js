$('div ul').hide();

$('span').on('mouseenter', (e) => {

        $(e.currentTarget).next().slideDown();
})
