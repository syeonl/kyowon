(function () {
    // 헤더 gnb 네비게이션
    $('.gnb .depth1').on('mouseenter', function () {
        $('#header').addClass('on');
        $('.gnb .depth2').stop().slideDown();
    }).on('mouseleave', function () {
        $('#header').removeClass('on');
        $('.gnb .depth2').stop().slideUp();
    });
    
    // 헤더 돋보기 클릭
    $('.btn_search').on('click',function() {
        $('.btn_search_box').toggleClass('open');
        $(this).toggleClass('on');
        $('.btn_menu_box').removeClass('on');
        $('body').toggleClass('hidden');
    });

    // 헤더 메뉴 클릭
    $('.btn_menu').on('click', function() {
        $('.btn_menu_box').addClass('on');
        $('.btn_search_box').removeClass('open');
        $('.btn_search').removeClass('on');
        $('#header .dimm').show();
        $('body').addClass('hidden');
    });

    // 메뉴닫기
    $('.btn_menu_close').on('click', function() {
        $('.btn_menu_box').removeClass('on');
        $('#header .dimm').fadeOut();
        $('body').removeClass('hidden');
    });

    // 딤클릭시 메뉴 닫기
    $('#header .dimm').on('click', function() {
        $('.btn_menu_box').removeClass('on');
        $('#header .dimm').fadeOut();
        $('body').removeClass('hidden');
    });

    var mainSlider = new Swiper('.main_slider', {
        loop: true, // 반복
        speed: 500, // 슬라이드 이동속도
        simulateTouch: true, // 마우스드래그(mousemove)
        effect: 'fade', //fade효과
        SlidesPerView: 3,
        autoplay: {
            delay: 3000, // 다음슬라이드 지연시간
            disableOnInteraction: false, // 안쪽 버튼 클릭시 안멈추게 
        },
        // 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // 좌우 화살표
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });



    // 메인페이지 무료체험 슬라이더
     var freeSlider = new Swiper('.free_slider', {
        loop: true, 
        speed: 500, 
        effect: 'fade', 
        fadeEffect: {
          crossFade: true, 
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, 
        },
        // 좌우 화살표
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    // 교원 영상 클릭시 유튜브 영상 나오게 처리
    $('.main_video .btn_youtube').on('click', function() {
        $('.modal_youtube').addClass('on');
    });

    $('.main_video .btn_close').on('click', function() {
        $('.modal_youtube').removeClass('on');
    });

    // 패밀리 사이트 슬라이드토글 기능
    $('.btn_family').on('click', function() {
        $('.family .list_family').slideToggle();
    });


    
    // 메인 페이지 탑버튼
    var btnTop = $('#footer .top_wrap .btn_top');

    $(window).scroll(function() {
        sc = $(this).scrollTop();

        // 탑버튼, 서브 상단 fixed
        if(sc >= 900) {
            btnTop.fadeIn(300);
        } else {
            btnTop.fadeOut(300);
        }

    }).trigger('scroll');


    var moveFlag = true;

    $('#footer .top_wrap').on('click', function() {
        if (moveFlag) {
            $(this).next().stop().animate({left:500, top:100, width:150, height:150}, 200,'easeOutBounce');
        } else {
            $(this).next().stop().animate({left:0, top:70, width:100, height:100}, 200, 'easeOutBounce');
        }
        moveFlag = !moveFlag;
    });


})();