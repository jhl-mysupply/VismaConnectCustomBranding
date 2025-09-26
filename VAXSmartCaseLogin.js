


document.addEventListener('DOMContentLoaded', function () {

    SetupCustomCSS();

    const containerElement = document.querySelector('#main-container');

    if (containerElement) {
        SetupLoginLayout(containerElement);
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

        .login-box-padding {
            padding-bottom: 10rem;
        }

        .footer-text {
            position: absolute;
            bottom: 0;
            padding: 2rem;
        }

        label {
            font-weight: bold !important;
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
            rightSectionLoginBox.classList.remove("padding-bottonm-0");
            rightSectionLoginBox.classList.add("login-box-padding");
        }

        const rightSectionFooter = document.createElement('div');
        rightSection.appendChild(rightSectionFooter);
        rightSectionFooter.innerHTML = "Kan du ikke huske dit brugernavn og/eller din adgangskode, s&aring; skal du kontakte ServiceDesk hos CIMT p&aring; telefon 38 64 80 80.";
        rightSectionFooter.classList.add('footer-text');


        //Setup login box layout
        const header = document.querySelector('.client-name-header');
        const applicationLogoElement = document.querySelector('.application-logo');
        const vismaLogoElement = document.querySelector('.visma-logo');
        const footerElement = document.querySelector('.footer-container');


        if (header) {
            header.textContent = "Velkommen til Region Hovedstadens medarbejdsportal";
        }

        if (applicationLogoElement) {
            applicationLogoElement.src = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-logo.jpg";
        }

        if (vismaLogoElement) {
            vismaLogoElement.src = "https://jhl-mysupply.github.io/VismaConnectCustomBranding/Images/RH-wide-logo.jpg";
        }

        if (footerElement) {
            //Removes footer
            footerElement.remove();
        }

        //Setup external provider button layout
        const externalProviderContainer = rightSection.querySelector('.external-providers');

        if (externalProviderContainer) {
            const microsoft = externalProviderContainer.querySelector('#form-provider-microsoft');
            const mitId = externalProviderContainer.querySelector('#form-provider-mitid');

            if (microsoft && mitId) {
                const microsoftLabel = document.createElement('label');
                microsoftLabel.textContent = "Log ind for medarbejdere i Region Hovedstaden";

                const mitIdLabel = document.createElement('label');
                mitIdLabel.textContent = "Log ind for eksterne";

                externalProviderContainer.insertBefore(microsoftLabel, microsoft);
                externalProviderContainer.insertBefore(mitIdLabel, mitId);
            }
        }
    }
}