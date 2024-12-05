import footerCSS from './../Footer/Footer.module.css';

function Footer() {
    return (
        <div className={`${footerCSS.footer_wrapper} section`}>
            <h3>SHOSTKABRO</h3>
            <div className={footerCSS.footer_links}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#service">Services</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
            </div>
            <div className={footerCSS.social}>
                <i className="ri-facebook-fill"></i>
                <i className="ri-instagram-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-youtube-fill"></i>
            </div>

        </div>
    );
}

export default Footer;

