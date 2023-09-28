"use strict";

// Mobile Menu Functionality
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger');
const openMenuIcon = document.querySelector('.open-menu');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const modalBg = document.getElementById('modal-bg');
const logo = document.querySelector('.logo')

// Modal and Pledge Card Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const backButton = document.getElementById('back-button');
    const modal = document.getElementById('modal');
    const modalContainer = document.querySelector('.modal-container');
    const modalCloseButton = document.getElementById('modal-close');
    const pledgeCards = document.querySelectorAll('.pledge-modal-card');
    const selectedPledges = document.querySelectorAll('.selected-pledge');

    // Function to show the modal
    function showModal() {
        modal.style.display = 'block';
        modalContainer.style.display = 'block';
    }

    // Function to hide the modal
    function hideModal() {
        modal.style.display = 'none';
        modalContainer.style.display = 'none';
    }

    // Event listener for the "Back this project" button to show the modal
    backButton.addEventListener('click', showModal);

    // Event listener for the modal's close button to hide the modal
    modalCloseButton.addEventListener('click', hideModal);

    // Function to handle card selection
    function handleCardSelection(event) {
        // Iterate through all pledge cards
        pledgeCards.forEach((card, index) => {
            if (card === event.currentTarget) {
                // If the clicked card matches the current card in the loop,
               // add the selected-card class to change its border color
                card.classList.add('selected-card');
                selectedPledges[index].style.display = 'block';

                // Find the corresponding radio button and change its checked style
                const radioBtn = selectedPledges[index].querySelector('input[type="radio"]');
                if (radioBtn) {
                    radioBtn.checked  = true;
                }
            } else {
                // If it's not the clicked card, remove the selected-card class to reset its border color
                card.classList.remove('selected-card');
                selectedPledges[index].style.display = 'none';          
            }
        });
    }

    // Add a click event listener to each pledge card to handle card selection
    pledgeCards.forEach((card) => {
        card.addEventListener('click', handleCardSelection);
    });
});

// Function to toggle the mobile menu
function toggleMobileMenu() {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        // Mobile menu is currently closed, so open it
        mobileMenu.style.display = 'block';
        modalBg.style.display = 'block';
        openMenuIcon.style.display = 'none';
        closeMenuIcon.style.display = 'block';
        logo.style.zIndex = '1000';
        closeMenuIcon.style.zIndex = '1000';
    } else {
        // Mobile menu is currently open, so close it
        mobileMenu.style.display = 'none';
        modalBg.style.display = 'none';
        openMenuIcon.style.display = 'block';
        closeMenuIcon.style.display = 'none';
        logo.style.zIndex = 'auto';
        hamburgerIcon.style.display = 'block';
    }
}

// Initially hide the close menu icon
closeMenuIcon.style.display = 'none';

// Event listeners for toggling the mobile menu
hamburgerIcon.addEventListener('click', toggleMobileMenu);
closeMenuIcon.addEventListener('click', toggleMobileMenu);

// Event listener for clicking outside the mobile menu to close it
modalBg.addEventListener('click', function (event) {
    if (event.target === modalBg) {
        // Close the menu if the click occurred on the modal background itself
        toggleMobileMenu();
    }
});

// Task: fix the handleCardSelection(event)