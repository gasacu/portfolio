let $menuTriggerButton = document.getElementById('menuTrigger');
let $mainMenuNav = document.getElementById('mainMenu');

$menuTriggerButton.addEventListener('click' , () => {
    $mainMenuNav.classList.toggle('Active');
});

document.onclick = function(e) {
    if (!$menuTriggerButton.contains(e.target) && !$mainMenuNav.contains(e.target) || $mainMenuNav.contains(e.target)) {
        $mainMenuNav.classList.remove('Active');
    }
}

let sections = document.querySelectorAll(".content-section");
let navLinks = document.querySelectorAll('div nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('OnPage');
                document.querySelector('div nav ul li a[href*=' + id + ']').classList.add('OnPage');
            });
        };
    });

};