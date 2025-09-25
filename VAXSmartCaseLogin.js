


document.addEventListener('DOMContentLoaded', function () {

    const containerElement = document.querySelector('#main-container');
    const header = document.querySelector('.client-name-header');
    const vismaLogoElement = document.querySelector('.visma-logo');
    const applicationLogoElement = document.querySelector('.application-logo');
    const loginBox = document.querySelector('.form-box');
    const footerBlurElement = document.querySelector('.footer-bg');

    if (containerElement) {
        SetupLoginLayout(containerElement);
    }

    if(header) {
        header.textContent = "Velkommen til Region Hovedstadens medarbejdsportal";
    }

    if (vismaLogoElement) {
        vismaLogoElement.src = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-wide-logo.jpg";
    }

    if (applicationLogoElement) {
        applicationLogoElement.src = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-logo.jpg";
    }

    if (footerBlurElement) {
        footerBlurElement.remove();
    }
});


function SetupLoginLayout(container) {

    //Create element under container
    const leftSection = document.createElement('div');
    container.prepend(leftSection);

    //Setup page structure
    container.style.display = "grid";
    container.style.gridTemplateColumns = "75% 25%";
    container.style.backgroundImage = "none";

    //Left section
    leftSection.style.backgroundImage = "url('https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-background-image.jpg')";
    leftSection.style.backgroundSize = "cover";
    leftSection.style.backgroundRepeat = "no-repeat";
    leftSection.style.height = "100%";

    //Right section
    const rightSection = container.querySelector('form-box');
    rightSection.classList.remove('form-box-login');
    const rightborder = rightSection.querySelector('login-form-container');
    rightborder.style.width = "100%";
}