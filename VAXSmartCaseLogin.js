
const logo = document.querySelector('.application-logo');

if(logo) {
    console.log("logo located");
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCYiPwX1ylk6y66NDG7CgcmSMlsiNg4r-wQ&s";
}
else {
    console.log("Failed to locate logo");
}
