// Open the mobile menu
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.left = '0';
});

// Close the mobile menu
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.left = '-100%';
});
