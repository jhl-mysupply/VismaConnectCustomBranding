



console.log("VAXSmartCaseLogin.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.client-name-header');
    if(header) {
        console.log("header located");
        header.textContent = "Velkommen til RH medarbejdsportal";
    }
    else {
        console.log("Failed to locate header");
    }

});