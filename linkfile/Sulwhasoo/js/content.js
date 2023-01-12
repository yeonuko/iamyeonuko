$(function(){



    const btn_tab = $('.recomm_tab a.btn_tab');
    const recomm_list = $('.recomm_list');


    btn_tab.click(recomm);

    function recomm(e){
        e.preventDefault();

        const idx = $(this).index();
        console.log(idx)

        btn_tab.removeClass('On');
        $(this).addClass('On');

        recomm_list.removeClass('Act');
        recomm_list.eq(idx).addClass('Act');
    }


})