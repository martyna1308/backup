$(document).ready(function () {

    $("a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {

            });
        }
    });

    $(function () {
        $.scrollify({
            section: ".scrollSection",
        });
    });

    $.scrollify({
        section: "section",
        sectionName: "scrollSection",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 800,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () {},
        after: function () {},
        afterResize: function () {},
        afterRender: function () {}
    });


    $("#menu button").click(function() {
        console.log('dziala');
        $("nav").css("margin-left: 0");
    })





});