


document.addEventListener('DOMContentLoaded', function () {

    const containerElement = document.querySelector('#main-container');
    const header = document.querySelector('.client-name-header');
    const vismaLogoElement = document.querySelector('.visma-logo');
    const applicationLogoElement = document.querySelector('.application-logo');
    const loginBox = document.querySelector('.form-box');


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

    if (loginBox) {
        loginBox.style.paddingTop = "10%";
    }

});


function SetupLoginLayout(container) {

    //Create element under container
    const leftSection = document.createElement('div');
    container.appendChild(leftSection);


    //Setup page structure
    container.style.display = "grid";
    container.style.gridTemplateColumns = "75% 25%";
    container.style.backgroundImage = "none";

    //Left section
    leftSection.style.backgroundImage = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-background-image.jpg";
    leftSection.style.backgroundSize = "cover";
    leftSection.style.backgroundRepeat = "no-repeat";
    leftSection.style.height = "100%";
}