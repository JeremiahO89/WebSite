const showResumePopup = document.querySelector(".resume-button");
const popUpContainerR = document.querySelector(".popUp__containerR");
const closeBtnR = document.querySelector(".close-btnR");

showResumePopup.onclick = () => {
    popUpContainerR.classList.add('active');
}

closeBtnR.onclick = () => {
    popUpContainerR.classList.remove('active');
}


const showTranscriptPopup = document.querySelector(".transcript-button");
const popUpContainerT = document.querySelector(".popUp__containerT");
const closeBtnT = document.querySelector(".close-btnT");

showTranscriptPopup.onclick = () => {
    popUpContainerT.classList.add('active');
}

closeBtnT.onclick = () => {
    popUpContainerT.classList.remove('active');
}



const showCertificationsPopup = document.querySelector(".certification-button");
const popUpContainerC = document.querySelector(".popUp__containerC");
const closeBtnC = document.querySelector(".close-btnC");

showCertificationsPopup.onclick = () => {
    popUpContainerC.classList.add('active');
}

closeBtnC.onclick = () => {
    popUpContainerC.classList.remove('active');
}