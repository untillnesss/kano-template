function toggleTab() {
    var toggle = document.getElementById('toggle')
    var tabs = document.querySelectorAll('.tab')
    if(toggle.checked == true) {
        for (var i = 0; i < tabs.length; ++i) {
            tabs[i].classList.remove('tab-disable')
            tabs[i].classList.add('tab-enable')
        }
    } else {
        for (var i = 0; i < tabs.length; ++i) {
            tabs[i].classList.remove('tab-enable')
            tabs[i].classList.add('tab-disable')
        }
    }
}
function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content')
    const tabs = document.querySelectorAll('.tab')
    tabContents.forEach((tabContent) => (tabContent.style.display = 'none'))
    tabs.forEach((tab) => (tab.classList.remove('active')))
    event.currentTarget.classList.add('active')
    document.getElementById(tabName).style.display = 'block'
}