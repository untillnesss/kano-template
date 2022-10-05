// NAV MOBILE
function openLeftNav() {
    $('.kanoo-cover-body').addClass('kanoo-cover-body-acitve');
    $('.nav-left-kanoo').css({'transform': 'translateX(0%)'});
}
function closeLeftNav() {
    $('.kanoo-cover-body').removeClass('kanoo-cover-body-acitve');
    $('.nav-left-kanoo').css({'transform': 'translateX(-100%)'});
}
$('#nav-button').on('click', function() {
    openLeftNav();
});
$('.kanoo-cover-body').on('click', function() {
    closeLeftNav();
});

// CHANGE PRIMARY IMAGE
$('.article-image-secondary').on('click', function() {
    let getSrcImg = $(this).attr('src');
    $(this).siblings().removeClass('article-image-secondary-active');
    $(this).addClass('article-image-secondary-active');
    $('.article-image-primary').hide(100, function() {
        $('.article-image-primary').attr('src', getSrcImg);
        $('.article-image-primary').show(100);
    });
});