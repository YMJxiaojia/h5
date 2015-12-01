var mySwiper = new Swiper('#img-slide', {
    direction: 'horizontal',
    loop: true,
    pagination: '#img-slide .swiper-pagination',
    autoplay: 5000
});

var swiper = new Swiper('#hot-list', {
    pagination: '#hot-list .swiper-pagination',
    slidesPerView: 'auto',
    spaceBetween: 15
});

$(".close-btn").on("click", function() {
    $(this).parent().hide();
    $('body').css('padding-bottom', '1.85rem');
    $('.footer').css('padding-bottom', '0rem');
});

function toTop(scrollTo, time) {
    var scrollFrom = parseInt(document.body.scrollTop),
        i = 0,
        runEvery = 5; // run every 5ms

    scrollTo = parseInt(scrollTo);
    time /= runEvery;

    var interval = setInterval(function() {
        i++;
        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
        if (i >= time) {
            clearInterval(interval);
        }
    }, runEvery);
}

$(window).on("scroll", function() {
    var scroH = document.body.scrollTop;
    if (scroH >= 20) {
        $(".goback").show();
    }
    if (scroH === 0) {
        $(".goback").hide();
    }
});
$('body').css('padding-bottom', '2.85rem');
$('.footer').css('padding-bottom', '1rem');
$(".goback a").click(function() {
    var t1 = 0;
    toTop(t1, 500);
});

$("#wrapper").pulldown({
    url: "a.php",
    wrapper: '#wrapper',
    num: 10,
    callback:function() {

    }
});
