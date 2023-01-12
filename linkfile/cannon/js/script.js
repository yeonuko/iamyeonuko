$(function () {

    $(".util_myca").hover(function () {
        $(".my").stop().slideDown()
    }, function () {
        $(".my").stop().slideUp()
    })


    $(".gnb_p").hover(function () {
        $(".d_wrap").stop().slideDown();
    }, function () {
        $(".d_wrap").stop().slideUp();

    })




    $(".move").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    $(".stop").click(function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on")
            $(".move").slick("slickPlay")
            //autoplay:true 로 되어있어서 이 순서대로 진행해야한다

        } else {
            $(this).addClass("on")
            $(".move").slick("slickPause")
        } //
    }) //click




    // ↓ photo_wrap slick
    $(".photo_wrap").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false
    });



    // ↓ banner_slick slick
    $(".banner_slick").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false
    });

    $(".b_stop").click(function () { //play
        if ($(this).hasClass("on")) {
            $(this).removeClass("on") //멈춤
            $(".banner_slick").slick("slickPlay")

        } else {
            $(".banner_slick").slick("slickPause")
            $(this).addClass("on") //stop
        } //
    }) //click



    // ↓ viewer_slick slick
    $(".viewer_slick").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false
    });

    $(".b_stop").click(function () { //play
        if ($(this).hasClass("on")) {
            $(this).removeClass("on") //멈춤
            $(".viewer_slick").slick("slickPlay")

        } else {
            $(".viewer_slick").slick("slickPause")
            $(this).addClass("on") //stop
        } //
    }) //click





    $(".store_slick").slick({
        autoplay: false,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
    });



    // ↓ s_play slick

    $(".s_play").click(function () { //play
        if ($(this).hasClass("on")) {
            $(this).removeClass("on") //멈춤
            $(".store_slick").slick("slickPause")

        } else {
            $(".store_slick").slick("slickPlay")
            $(this).addClass("on") //stop
        } //
    }) //click



    $(".notice").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        vertical:true //세로로 움직여!
    }) // $(".notice").slick

    $(".n_stop").click(function () { //play
        if ($(this).hasClass("on")) {
            $(this).removeClass("on") //멈춤
            $(".notice").slick("slickPlay")

        } else {
            $(".notice").slick("slickPause")
            $(this).addClass("on") //stop
        } //
    }) //  $(".n_stop").click





}) //jQuery