let $menuTriggerButton = document.getElementById('menuTrigger');
let $mainMenuNav = document.getElementById('mainMenu');

$menuTriggerButton.addEventListener('click' , () => {
    $mainMenuNav.classList.toggle('Active');
}, true);