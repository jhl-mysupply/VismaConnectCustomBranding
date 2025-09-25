


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
            display: flex;
            align-items: center;
            height: 100%;
        }

        .footer-text {
            position: absolute;
            bottom: 0;
            padding: 2rem;
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
        rightSection.classList.add('right-section');

        const rightSectionLoginBox = rightSection.querySelector('#login-form-container');
        const boxFooter = rightSection.querySelector('.form-footer');

        if (rightSectionLoginBox && boxFooter) {
            rightSectionLoginBox.appendChild(boxFooter);
        }

        const rightSectionFooter = document.createElement('div');
        rightSection.appendChild(rightSectionFooter);
        rightSectionFooter.innerHTML = "Kan du ikke huske dit brugernavn og/eller din adgangskode, s&aring; skal du kontakte ServiceDesk hos CIMT p&aring; telefon 38 64 80 80.";
        rightSectionFooter.classList.add('footer-text');

        //Setup external provider button layout
        const externalProviderContainer = rightSection.querySelector('.external-providers');

        if (externalProviderContainer) {
            const microsoft = externalProviderContainer.querySelector('#form-provider-microsoft');
            const mitId = externalProviderContainer.querySelector('#form-provider-mitid');

            

            if (microsoft && mitId) {
                const microsoftLabel = document.createElement('label');
                microsoftLabel.textContent = "Log in for medarbejdere i Region Hovedstaden";

                const mitIdLabel = document.createElement('label');
                mitIdLabel.textContent = "Log in for medarbejdere i Region Hovedstaden";


                container.insertBefore(microsoftLabel, microsoft);
                container.insertBefore(mitIdLabel, mitId);
            }
        }
    }
}