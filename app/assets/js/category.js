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

// FILTER TOGGLE
$('#form-aside button[data-button="filter-toggle"]').on('click', function() {
    let getData = $(this).data('toggle');
    if(getData == 'open') {
        $(this).data('toggle', 'close');
        $(this).parent().siblings().slideUp(200);
        $(this).html(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 15.5C11.8683 15.5008 11.7379 15.4755 11.616 15.4258C11.4942 15.376 11.3834 15.3027 11.2899 15.21L7.28994 11.21C7.1967 11.1168 7.12274 11.0061 7.07228 10.8843C7.02182 10.7624 6.99585 10.6319 6.99585 10.5C6.99585 10.3681 7.02182 10.2376 7.07228 10.1158C7.12274 9.99393 7.1967 9.88324 7.28994 9.79C7.38318 9.69676 7.49387 9.6228 7.61569 9.57234C7.73751 9.52188 7.86808 9.49591 7.99994 9.49591C8.1318 9.49591 8.26237 9.52188 8.38419 9.57234C8.50601 9.6228 8.6167 9.69676 8.70994 9.79L11.9999 13.1L15.2999 9.92C15.3919 9.81771 15.504 9.7355 15.6293 9.67852C15.7545 9.62153 15.8901 9.59099 16.0276 9.58881C16.1652 9.58664 16.3017 9.61286 16.4287 9.66585C16.5556 9.71884 16.6703 9.79746 16.7655 9.89678C16.8607 9.99611 16.9343 10.114 16.9819 10.2431C17.0294 10.3722 17.0498 10.5097 17.0418 10.647C17.0338 10.7844 16.9975 10.9186 16.9352 11.0413C16.873 11.1639 16.7861 11.2724 16.6799 11.36L12.6799 15.22C12.4971 15.3963 12.2539 15.4964 11.9999 15.5Z" fill="black"/>
            </svg>
        `)
    } else {
        $(this).data('toggle', 'open');
        $(this).parent().siblings().slideDown(200);
        $(this).html(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12C20 11.7348 19.9132 11.4804 19.7588 11.2929C19.6044 11.1054 19.3949 11 19.1765 11L6.82353 11C6.60512 11 6.39565 11.1054 6.24121 11.2929C6.08676 11.4804 6 11.7348 6 12C6 12.2652 6.08676 12.5196 6.24121 12.7071C6.39565 12.8946 6.60512 13 6.82353 13L19.1765 13C19.3949 13 19.6044 12.8946 19.7588 12.7071C19.9132 12.5196 20 12.2652 20 12Z" fill="#222222"/>
            </svg>
        `)
    }
});

// RANGE SETTING DESKTOP
let rangeInput = document.getElementById("range-budget-input");
let rangeValue = document.getElementById("range-budget-value");
let rangeProgress = document.getElementById("range-budget-progress");
let rangeLength = document.getElementById("range-budget-length").innerText.length;
rangeValue.innerHTML = rangeInput.value;
rangeProgress.style.width = `${rangeInput.value / 10}%`;
rangeInput.oninput = function() {
    rangeValue.innerHTML = this.value;
    rangeProgress.style.width = `${this.value / 10}%`;
}

// SELECT BOX CATEGORY
$('#form-aside label').on('click', function() {
    if($(this).prev().prop('checked') === true) {
        $(this).find('.form-custom-checkbox-box').removeClass('checkbox-box-active');
    } else {
        $(this).find('.form-custom-checkbox-box').addClass('checkbox-box-active');
    }
});


// OPEN FILTER MOBILE
$('.filter-main-sort button[data-button="open-filter"]').on('click', function() {
    $('html').css({ 'overflow-y': 'hidden' });
    $('#filter-mobile').addClass('filter-mobile-active');
});
// CANCEL FILTER MOBILE
$('#filter-mobile button[data-button="cancel-filter"]').on('click', function() {
    $('html').css({ 'overflow-y': 'auto' });
    $('#filter-mobile').removeClass('filter-mobile-active');
});
// SIMPAN FILTER MOBILE
$('#filter-mobile button[data-button="simpan-filter"]').on('click', function() {
    $('html').css({ 'overflow-y': 'auto' });
    $('#filter-mobile').removeClass('filter-mobile-active');
});

// RANGE SETTING MOBILE
let rangeInputMobile = document.getElementById("range-budget-input-mobile");
let rangeValueMobile = document.getElementById("range-budget-value-mobile");
let rangeProgressMobile = document.getElementById("range-budget-progress-mobile");
let rangeLengthMobile = document.getElementById("range-budget-length-mobile").innerText.length;
rangeValueMobile.innerHTML = rangeInputMobile.value;
rangeProgressMobile.style.width = `${rangeInputMobile.value / 10}%`;
rangeInputMobile.oninput = function() {
    rangeValueMobile.innerHTML = this.value;
    rangeProgressMobile.style.width = `${this.value / 10}%`;
}

// SELECT BOX FILTER
$('#filter-mobile .filter-label-text').on('click', function() {
    $(this).toggleClass('filter-label-text-active');
});