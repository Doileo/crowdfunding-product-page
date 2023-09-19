"use strict";
/* 
1. Make a selection of which pledge to make:
- Add event listeners to the "Select reward" buttons in the pledge options.
- When a button is clicked, open the selection modal with the corresponding pledge details.

2. See an updated progress bar and total money raised based on their pledge total after confirming a pledge:
- Create variables to track the total money raised and the number of backers.
- Update these variables when a pledge is confirmed.
- Update the progress bar based on the total money raised.

3. See the number of total backers increment by one after confirming a pledge:
- Increment the number of backers when a pledge is confirmed.
- Toggle whether or not the product is bookmarked:

4. Add an event listener to the "Bookmark" button.
- Toggle the bookmark state when the button is clicked.

5. Make the hamburger menu work:
- Add an event listener for opening the mobile menu
- Add an event listener for closing the mobile menu
- Add an Event listener for clicking outside the mobile menu to close it
*/

document.addEventListener("DOMContentLoaded", function () {
    //Variables to track total money raised and total backers
    let totalMoneyRaised = 0; // Initial value
    let totalBackers = 0; // Initial value

    //Event listener for the "Select reward" button
    const selectButtons = document.querySelectorAll(".select-btn");
    selectButtons.forEach((button) => {
        button.addEventListener("click", function ()  {
            //Show the selection modal for the corresponding pledge
            const pledgeModal = document.querySelector(".selection-modal-container");
            pledgeModal.style.display = "block";
        });
    });
})