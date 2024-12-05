/* eslint-disable react/no-unknown-property */
import serviceCSS from './../Services/Service.module.css';
// import serviceBg from './../../assets/service-bg.jpg';
import gallery01 from './../../assets/Gallery01.jpg';
import gallery02 from './../../assets/Gallery02.jpg';
import gallery03 from './../../assets/Gallery03.jpg';
import gallery04 from './../../assets/Gallery04.jpg';
import gallery05 from './../../assets/Gallery05.jpg';

function Service() {
  return (
    <div className={`${serviceCSS.Service_wrapper} section`} id='service'>
      <div className='Section_title'>
        <p>PHOTOGRAPHY & VIDEOGRAPHY THAT REFLECTS YOUR VISION</p>
        <h2>
          Services That<span>Transform Your Precious</span> <br />
          info timeless visual art
        </h2>
      </div>

      <div className={serviceCSS.service_container}>
        {/* <img src={serviceBg} alt='jpg' /> */}
        <div className={serviceCSS.service_content}>
          <small>
            <i className='ri-video-on-ai-line'></i>Relive for Yers
          </small>

          <div className={serviceCSS.service_info}>
            <div className={serviceCSS.content_wrapper}>
              <h2>
                Wedding PhotoGraphy <br /> & Videography
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                harum voluptatum fugiat quo animi quisquam sed dignissimos iste
                magni, eius deserunt repellendus porro corporis, iure nihil
                dolorem consectetur assumenda qui.
              </p>
            </div>
            <div className={serviceCSS.content_wrapper}>
              <h3>How do I Book a Session ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, dolores.
              </p>
              <h3>How do I Book a Session ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, dolores.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={serviceCSS.Gallery} id='works'>
        <div className={serviceCSS.gallery_img} count='01'>
          <img src={gallery01} alt='service-gallery-images' />
        </div>
        <div className={serviceCSS.gallery_img} count='02'>
          <img src={gallery02} alt='service-gallery-images' />
        </div>
        <div className={serviceCSS.gallery_img} count='03'>
          <img src={gallery03} alt='service-gallery-images' />
        </div>
        <div className={serviceCSS.gallery_img} count='04'>
          <img src={gallery04} alt='service-gallery-images' />
        </div>
        <div className={serviceCSS.gallery_img} count='05'>
          <img src={gallery05} alt='service-gallery-images' />
        </div>
      </div>
    </div>
  );
}

export default Service;
