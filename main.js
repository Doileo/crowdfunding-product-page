"use strict";

// Get references to the mobile menu, hamburger icon, close icon and log
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger');
const openMenuIcon = document.querySelector('.open-menu');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const modalBg = document.getElementById('modal-bg');
const logo = document.querySelector('.logo')

// Function to toggle the mobile menu
function toggleMobileMenu() {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        // Mobile menu is currently closed, so here it is to open it
        mobileMenu.style.display = 'block';
        modalBg.style.display = 'block';
        openMenuIcon.style.display = 'none';
        closeMenuIcon.style.display = 'block';
        logo.style.zIndex = '1000';
        closeMenuIcon.style.zIndex = '1000';
    } else {
        // Mobile menu is currently open, so we need to close it
        mobileMenu.style.display = 'none';
        modalBg.style.display = 'none';
        openMenuIcon.style.display = 'block';
        closeMenuIcon.style.display = 'none';
        logo.style.zIndex = 'auto';
        hamburgerIcon.style.display = 'block';
    }
}

// Initially show the hamburger icon and hide the close icon
closeMenuIcon.style.display = 'none';

// Event listener for clicking the hamburger icon or close icon to toggle the mobile menu
hamburgerIcon.addEventListener('click', toggleMobileMenu);
closeMenuIcon.addEventListener('click', toggleMobileMenu);

// Event listener for clicking outside the mobile menu to close it
modalBg.addEventListener('click', function (event) {
    if (event.target === modalBg) {
        // Only close the menu if the click occurred on the modal background itself
        toggleMobileMenu();
    }
});