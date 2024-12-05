import { useRef } from 'react';
import navCSS from './../Nav/Nav.module.css'

function Nav ()  {

    const menu = useRef();
    const nav = useRef();
    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    }

    window.addEventListener('scroll' , function () {
        if (window.scrollY > 100) {
            nav.current.classList.add(navCSS.navColor);
        }
        else {
            nav.current.classList.remove(navCSS.navColor);
        }
    })

    return ( 
        <div className={navCSS.nav_wrapper} ref={nav}>
            <div className={navCSS.logo}>
                <a href="#">Helios</a>
            </div>
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
            <div className={navCSS.nav_btns}>
                <button>Hire Me <i className="ri-arrow-right-up-line"></i></button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
     );
}
 
export default Nav;