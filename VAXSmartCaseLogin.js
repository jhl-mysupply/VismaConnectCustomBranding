


document.addEventListener('DOMContentLoaded', function () {

    SetupCustomCSS();

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



function SetupCustomCSS() {
    const css =
    `
        .page-container {
            display: grid;
            grid-template-columns: 75% 25%;
            background-image: none;
        }

        .background-image {
            background-image: url('https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-background-image.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            height: 100%;
        }
    `
    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
}

function SetupLoginLayout(container) {

    //Create element under container
    const leftSection = document.createElement('div');
    container.prepend(leftSection);

    //Setup page structure
    container.classList.add('page-container');
    //container.style.display = "grid";
    //container.style.gridTemplateColumns = "75% 25%";
    //container.style.backgroundImage = "none";

    //Left section
    leftSection.classList.add('background-image');
    //leftSection.style.backgroundImage = "url('https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-background-image.jpg')";
    //leftSection.style.backgroundSize = "cover";
    //leftSection.style.backgroundRepeat = "no-repeat";
    //leftSection.style.height = "100%";

    //Right section
    const rightSection = container.querySelector('.form-box');

    if (rightSection) {
        rightSection.classList.remove('form-box-login');

        const rightborder = rightSection.querySelector('#login-form-container');

        if (rightborder) {
            rightborder.style.width = "100%";
        }
    }

}