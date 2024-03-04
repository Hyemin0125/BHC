$('.btnNav').on('click',function(){
    $('nav').animate({'left':0},300);
});
$('.btnClose').on('click',function(){
    $('nav').animate({'left':'-100%'},300);
});//mo_gnb_btn


$('.gnb>li').on('mouseover',function(){

    $(this).children('.sub').stop().slideDown();

}).on('mouseout',function(){

    $(this).children('.sub').stop().slideUp();
}); //mo_gnb_slide

var $header = $('header');
$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $header.addClass('sticky');
    }else{
        $header.removeClass('sticky');
    }
});//header 변형

$('.bn .bnWrap').slick({
    'arrows': false,
    'autoplay': true,
    'fade': true,
});//main_slide

$('.mWrap .tabBtn ul li').on('click',function(e){
    e.preventDefault();

    var i = $(this).index();
    $('.mWrap .tabCon .row').eq(i).stop().show().css('display','block')
    .siblings().stop().hide();
    $(this).addClass('on').siblings().removeClass('on');
});


$('.news .nWrap .nMoreBtn').on('click',function(){
    $('.news .nWrap .nHide').stop().show();
});
// news&event 더보기

$('.sns .snsWrap .sns2 .insta').slick({
    'slidesToShow': 1,
    'autoplay': true,
    'arrows': false,
});

$('footer .footer2 .rel button').click(function(){

    $('footer .footer2 .rel ul').stop().slideToggle();

});

