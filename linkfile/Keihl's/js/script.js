$(function () {

    //최근 본 상품
    $(window).scroll(function(){

        var scrollTop = $(this).scrollTop();
        console.log("scrollTop:", top);
        $(".lately").css({top: scrollTop}) //scrollTop속성값을 top이라는 변수에 집어 넣어줘
    })//scroll






    // $(".nav_menu li .sub").hide();
    // $(".nav_menu >li").eq(0).show();
    $(".nav_menu >li").eq(0).find(".sub").show();
    

    /* ↓ nav_menu 영역 */

    $(".list_cate>a , .nav_wrap").hover(function () {
        $(".nav_wrap").stop().slideDown(); 
        
    }, function () {
        $(".nav_wrap").stop().slideUp()
    })//


    $(".list_cate>a").click(function () {
        $(".nav_menu").stop().slideDown(); 
        
    }, function () {
        $(".nav_menu").stop().slideUp()
    })//






    //.list_cate a 메뉴 버튼 호버~~
    $(".list_cate a").hover(function(){
        $(this).addClass("on")

    },function(){
        $(this).removeClass("on")
    })




    

    $(".nav_menu > li").hover(function () {
        var n = $(this).index();
        console.log("n : " ,  n);        
        $(this).find("ul").stop().show();        
        // $(".nav_menu >li").eq(0).find(".sub").stop().show();
        $(".img_list li").hide();
        $(this).parent(".nav_menu").siblings(".sub_item_list").find(".img_list li").eq(n).show();


    }, function () {
        $(".sub").stop().hide();
        $(".nav_menu> li").eq(0).find(".sub").stop().show();
    })


    
    //img_slot 카테고리 별 이미지
    $(".img_list li").eq(0).siblings().hide();









    // heart 효과
    $(".heart").click(function(){
        $(this).toggleClass("on")
    })






    // ↓ banner_box slick

    $(".banner_box").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });




    $(".gift_inner>ul").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        slidesToShow: 4, //슬라이드 목록 갯수 잡아주기
        slidesToScroll: 1, //한번에 몇개씩 스크롤 할거야
        centerMode: true, //가운데 센터모드 쓸거야? 응
        responsive: [
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 2
                }
            }
        ]
    });





    


    // $(".m_gift_list").slick({
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     dots: false,
    //     arrows: false,
    //     slidesToShow: 2, //슬라이드 목록 갯수 잡아주기
    //     slidesToScroll: 1, //한번에 몇개씩 스크롤 할거야
    //     centerMode: false //가운데 센터모드 쓸거야? 응
    // });





}) //jQuery