// dropdown function
function drop(el) {
    let dropdowns = document.getElementsByClassName('dropdown-content');

    let table = document.getElementById('table');

    let thisDropdown = el.nextSibling.nextSibling;
    
    if (!thisDropdown.classList.contains('show')) {
        table.classList.add('overflow-x-auto');
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
    
    thisDropdown.classList.toggle('show');
    table.classList.toggle('overflow-x-auto');
}