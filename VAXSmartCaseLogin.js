


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.client-name-header');
    const backgroundImageElement = document.querySelector('#main-container');
    const vismaLogoElement = document.querySelector('.visma-logo');
    const applicationLogoElement = document.querySelector('.application-logo');
    const loginBox = document.querySelector('.form-box');

    if(header) {
        header.textContent = "Velkommen til Region Hovedstadens medarbejdsportal";
    }

    //if (backgroundImageElement) {
    //    backgroundImageElement.style.backgroundImage = "url('datanet.png')";
    //}

    //if (vismaLogoElement) {
    //    vismaLogoElement.src = "mysupply-name-logo.png";
    //}

    //if (applicationLogoElement) {
    //    applicationLogoElement.src = "mysupply-logo.png";
    //}

    if (loginBox) {
        loginBox.style.paddingTop = "20%";
    }

});