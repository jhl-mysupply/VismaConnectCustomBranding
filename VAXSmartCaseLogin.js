


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.client-name-header');
    const backgroundImageElement = document.querySelector('#main-container');
    const vismaLogoElement = document.querySelector('.visma-logo');
    const applicationLogoElement = document.querySelector('.application-logo');
    const loginBox = document.querySelector('.form-box');

    if(header) {
        header.textContent = "Velkommen til Region Hovedstadens medarbejdsportal";
    }

    if (backgroundImageElement) {
        backgroundImageElement.style.backgroundImage = "url('datanet.png')";
        backgroundImageElement.style.backgroundImage = "";
    }

    if (vismaLogoElement) {
        vismaLogoElement.src = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-wide-logo.jpg";
    }

    if (applicationLogoElement) {
        applicationLogoElement.src = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-logo.jpg";
    }

    if (loginBox) {
        loginBox.style.paddingTop = "10%";
    }

});