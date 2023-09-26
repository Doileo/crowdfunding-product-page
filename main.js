"use strict";

// Get references to the mobile menu, hamburger icon, close icon and log
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger');
const openMenuIcon = document.querySelector('.open-menu');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const modalBg = document.getElementById('modal-bg');
const logo = document.querySelector('.logo')

// Function to open the mobile menu
function openMobileMenu() {
    mobileMenu.style.display = 'block';
    modalBg.style.display = 'block';

    // Toggle the display property between open and close icons
    openMenuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'block';

    logo.style.zIndex = '1000';
    closeMenuIcon.style.zIndex = '1000';
}

// Function to close the mobile menu
function closeMobileMenu() {
    mobileMenu.style.display = 'none';
    modalBg.style.display = 'none';

    // Toggle the display property between open and close icons
    openMenuIcon.style.display = 'block';
    closeMenuIcon.style.display = 'none';

    // Reset the logo and close icon appearance
    logo.style.zIndex = 'auto';
    hamburgerIcon.style.display = 'block';
}

// Initially show the hamburger icon and hide the close icon
closeMenuIcon.style.display = 'none';

// Event listener for clicking the hamburger icon
hamburgerIcon.addEventListener('click', openMobileMenu);

// Event listener for clicking the close icon
closeMenuIcon.addEventListener('click', closeMobileMenu);

// Event listener for clicking outside the mobile menu to close it
modalBg.addEventListener('click', closeMobileMenu);

// Use the if else statement here