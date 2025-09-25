


document.addEventListener('DOMContentLoaded', function () {

    SetupCustomCSS();

    const containerElement = document.querySelector('#main-container');
    const header = document.querySelector('.client-name-header');
    const vismaLogoElement = document.querySelector('.visma-logo');
    const applicationLogoElement = document.querySelector('.application-logo');
    const footerElement = document.querySelector('.footer-container');

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

    if (footerElement) {
        //Removes footer
        footerElement.remove();
    }
});



function SetupCustomCSS() {
    const css =
    `
        .page-container {
            display: grid;
            grid-template-columns: 75% 25%;
            background-image: none;
            align-items: center;
            min-height: 100%;
            background: white;
        }

        .left-section {
            background-image: url('https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-background-image.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            height: 100%;
        }

        .right-section {
            width: 100%;
        }
    `
    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
}

function SetupLoginLayout(container) {

    //Setup page structure
    container.removeAttribute('id');
    container.classList.add('page-container');

    //Left section
    const leftSection = document.createElement('div');

    if (leftSection) {
        container.prepend(leftSection);
        leftSection.classList.add('left-section');
    }

    //Right section
    const rightSection = container.querySelector('.form-box');

    if (rightSection) {
        rightSection.classList.remove('form-box-login');
        rightSection.classList.remove('form-box');
        rightSection.classList.add('right-section');

        const rightSectionFooter = document.createElement('div');
        rightSection.appendChild(rightSectionFooter);
        rightSectionFooter.textContent = "Kan du ikke huske dit brugernavn og/eller din adgangskode, så skal du kontakte ServiceDesk hos CIMT på telefon 38 64 80 80.";
    }

}