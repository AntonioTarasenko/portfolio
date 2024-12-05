import aboutCSS from './../About/About.module.css'
import profileImg from './../../assets/profile.jpg'
import about_img from './../../assets/About-img.jpg'
import photoShop from './../../assets/ph.png'
import ae from './../../assets/ae.png'
import final from './../../assets/final.png'
import award from './../../assets/award-image.jpg'

function About() {
    return ( 
        <div className={`${aboutCSS.About_wrapper} section`} id='about'>
            <div className="Section_title">
                <p>PHOTOGRAPHY & VIDEOGRAPHY THAT SPEAKS</p>
                <h2>Hi ! I M <span>Helios</span> , A Creative Director <br /> From Russia</h2>
            </div>

            <div className={aboutCSS.about_container}>
                <div className={aboutCSS.about_details}>
                    <small>600+</small>
                    <h2>Projects Completed</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis magni ipsa eum magnam dolore aspernatur vero nostrum, recusandae adipisci. Nisi dolor impedit perspiciatis corrupti at, dolore soluta est sit.</p>
                    <div className={aboutCSS.profile}>
                        <img src={profileImg} alt="img" />
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                <div className={aboutCSS.about_content}>
                    <div className={aboutCSS.about_image}>
                        <img src={about_img} alt="img" />
                        <div className={aboutCSS.about_info}>
                            <h3>Creative Director <span>Helion</span></h3>
                        </div>
                    </div>
                    <div className={aboutCSS.about_detail}>
                        <small>My Creative Toolkit</small>
                        <h3>The Tools behind <br /> Creating the Magic</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, sit! A saepe molestiae totam dolore repellat magni non assumenda facere placeat labore. Fugit quisquam, qui harum magni at eum inventore.</p>
                        <div className={aboutCSS.Tools}>
                            <div className={aboutCSS.Tool}>
                                <img src={photoShop} alt="photoshop" />
                                <p>Photoshop <span>Advanced Post - Processing</span></p>
                            </div>
                            <div className={aboutCSS.Tool}>
                                <img src={ae} alt="ae" />
                                <p>After Effect <span>Motion Graphics and Visual Effects</span></p>
                            </div>
                            <div className={aboutCSS.Tool}>
                                <img src={final} alt="final" />
                                <p>Final Cut Pro <span>Cinematic Video Editing</span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className={aboutCSS.awards_container}>
                <div className={aboutCSS.awards_image}>
                    <img src={award} alt="img" />
                    <i className="ri-play-line"></i>
                </div>
                <div className={aboutCSS.awards_details}>
                    <p>My Awards</p>
                    <h3>Best Photographer <br /> of the Year</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <div className={aboutCSS.awards_list}>
                        <p><i className="ri-trophy-line"></i> Award-winning photographer</p>
                        <p><i className="ri-trophy-line"></i> Featured in the New York Times</p>
                        <p><i className="ri-trophy-line"></i> Certified Professional Photographer</p>
                        <p><i className="ri-trophy-line"></i> Collaborated with the New York Times</p>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default About;