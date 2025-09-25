


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
        vismaLogoElement.src = "https://www.regionh.dk/til-fagfolk/Om-Region-H/regionens-design/logo-og-grundelementer/logo-til-print-og-web/Publishingimages/RegionH_logo.jpg";
    }

    if (applicationLogoElement) {
        applicationLogoElement.src = "https://www.regionh.dk/til-fagfolk/Om-Region-H/regionens-design/logo-og-grundelementer/logo-til-print-og-web/Publishingimages/Maerke_RegH.jpg";
    }

    if (loginBox) {
        loginBox.style.paddingTop = "10%";
    }

});