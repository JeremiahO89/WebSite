
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="navStyles.css">
        <script src='navBar.js'> </script>
        <nav class="navbar">
        <div class="navbar__container">
            <ul class="navbar__logo__list">
                <a href="HomePG.html" id="navbar__icon"><i class="fa-solid fa-frog"></i></a>
                <a href="HomePG.html" id="navbar__logo"><i class=""></i>Jeremiah J Ondrasik</a>
            </ul>

            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="ResumePG.html" class="navbar__links">Resume</a>
                </li>
                <li class="navbar__item">
                    <a href="ProjectsPG.html" class="navbar__links">Projects</a>
                </li>
                <li class="navbar__item">
                    <a href="ClubsPG.html" class="navbar__links">Clubs</a>
                </li>
                <li class="navbar__btn">
                    <a href="/" class="button">Information</a>
                </li>
            </ul>
        </div>
    </nav>
        `;
    }
}
customElements.define('my-header', MyHeader);



class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="footerStyles.css">
        <div class="footer__container">
            <div class="social__media">
                <div class="social__icons">
                    <a href="https://www.linkedin.com/in/jeremiah-ondrasik/" class="social__icon--link" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/JeremiahO89" class="social__icon--link" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.youtube.com/@jeremiahondrasik3133" class="social__icon--link" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.instagram.com/jeremiah_ondrasik/" class="social__icon--link" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="/" class="social__icon--link" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
                <h2>&copy; JJO 2024 All rights reserved</h2>
            </div>
        </div>
        `;
    }
}
customElements.define('my-footer', MyFooter);
