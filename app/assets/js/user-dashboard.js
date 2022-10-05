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

// EDIT DESCRIPTION
$('.aside-dashboard button.aside-button-edit').on('click', function() {
    let getDataButton = $(this).data('description');
    if(getDataButton == 'readonly') {
        $('.aside-description-area').attr('readonly', true).css({ 'padding': '8px', 'border': '1px solid #EA3AA1' });
        $(this).text('Save');
        $(this).data('description', 'write');
    } else {
        $('.aside-description-area').attr('readonly', false).css({ 'padding': '0px', 'border': 'unset' });
        $(this).text('Edit');
        $(this).data('description', 'readonly');
    }
});