// import contactCSS from './../Contact/Contact.module.css'
// import contactImg from './../../assets/contact-bg.jpg'

// function Contact() {
//     return (
//         <div className={`${contactCSS.Contact_wrapper} section`} id='contact'>
//             <div className="Section_title">
//                 <p>Let&apos;s Make Something Beatiful</p>
//                 <h2>Contact me For You <br /> Next Creative Project!!!</h2>
//             </div>

//           <div className={contactCSS.contact_container}>
//                 <div className={contactCSS.contact_image}>
//                         <img src={contactImg} alt="img" />
//                 </div>
                
//                     <div className={contactCSS.contact_details}>
//                         <div className={contactCSS.detail_wrapper}>
//                             <div className={contactCSS.detail}>
//                                 <i className="ri-building-line"></i>
//                                 <p>Bhua Nuha Street 412 , Banding - Indonesia</p>
//                             </div>
//                             <div className={contactCSS.detail}>
//                                 <i className="ri-mail-line"></i>
//                                 <p>example@gmail.com</p>
//                             </div>
//                             <div className={contactCSS.detail}>
//                                 <i className="ri-time-line"></i>
//                                 <p>10:00 AM - 5:00 PM</p>
//                             </div>
//                         </div>
//                         <div className={contactCSS.form}>
//                             <h3>Get in Touch</h3>
//                             <div className={contactCSS.input_container}>
//                                 <div className={contactCSS.input_wrapper}>
//                                     <input type="text" placeholder='Enter Name' />
//                                 </div>
//                                 <div className={contactCSS.input_wrapper}>
//                                     <input type="Email" placeholder='Enter Email' />
//                                 </div>
//                                 <div className={contactCSS.input_wrapper}>
//                                     <input type="text" placeholder='Enter Phone' />
//                                 </div>
//                                 <textarea placeholder='Message'></textarea>
//                                 <button>Send Message</button>
//                             </div>
//                         </div>
//                     </div>
//           </div>
//         </div>
//     );
// }

// export default Contact;



import contactCSS from './../Contact/Contact.module.css';
import contactImg from './../../assets/contact-bg.jpg';

function Contact() {
    return (
        <div className={`${contactCSS.Contact_wrapper} section`} id='contact'>
            <div className="Section_title">
                <p>Let&apos;s Make Something Beautiful</p>
                <h2>Contact Me For Your <br /> Next Creative Project!!!</h2>
            </div>

            <div className={contactCSS.contact_container}>
                <div className={contactCSS.contact_image}>
                    <img src={contactImg} alt="Contact Background" />
                </div>

                <div className={contactCSS.contact_details}>
                    <div className={contactCSS.detail_wrapper}>
                        <div className={contactCSS.detail}>
                            <i className="ri-building-line"></i>
                            <p>Bhua Nuha Street 412, Banding - Indonesia</p>
                        </div>
                        <div className={contactCSS.detail}>
                            <i className="ri-mail-line"></i>
                            <p>example@gmail.com</p>
                        </div>
                        <div className={contactCSS.detail}>
                            <i className="ri-time-line"></i>
                            <p>10:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    <div className={contactCSS.form}>
                        <h3>Get in Touch</h3>
                        <form
                            action="https://formspree.io/f/mjkvzkkr"
                            method="POST"
                            className={contactCSS.input_container}
                        >
                            <div className={contactCSS.input_wrapper}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    required
                                />
                            </div>
                            <div className={contactCSS.input_wrapper}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    required
                                />
                            </div>
                            <div className={contactCSS.input_wrapper}>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                            ></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
