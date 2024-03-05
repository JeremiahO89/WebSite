const showResumePopup = document.querySelector(".resume-button");
const popUpContainer = document.querySelector(".popUp__container");
const closeBtn = document.querySelector(".close-btn");

showResumePopup.onclick = () => {
    popUpContainer.classList.add('active');
}

closeBtn.onclick = () => {
    popUpContainer.classList.remove('active');
}