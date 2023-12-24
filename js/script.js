// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil href
    var tujuan = $(this).attr('href');

    // tangkap element ybs
    var elementtujuan = $(tujuan);

    $('html').animate({
        scrollTop: elementtujuan.offset().top - 50
    }, 'easesInOutExpo');
    e.preventDefault();
    S
})