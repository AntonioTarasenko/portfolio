import newsCSS from './../News/News.module.css';
import news_pic01 from './../../assets/blog01.jpg';
import news_pic02 from './../../assets/blog02.jpg';
import news_pic03 from './../../assets/blog03.jpg';

function News() {
    return (
        <div className={`${newsCSS.news_Wrapper} section`} id='news'>
            <div className="Section_title">
                <p>Explore The Latest Updates</p>
                <h2>The Latest News and Creative <br /> Updates form my Journer</h2>

                <div className={newsCSS.news_cards}>
                    <div className={newsCSS.card}>
                        <img src={news_pic01} alt="news-image" />

                        <div className={newsCSS.news_content}>
                            <p>Lifestyle</p>
                            <h3>What is Lorem <br /> Ipsum?</h3>

                            <div className={newsCSS.profile}>
                                <i className="ri-user-line"></i>
                                <small>Siska Maenda</small>
                                <i className="ri-time-line"></i>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                    </div>

                    <div className={newsCSS.card}>
                        <img src={news_pic02} alt="news-image" />

                        <div className={newsCSS.news_content}>
                            <p>Lifestyle</p>
                            <h3>What is Lorem <br /> Ipsum?</h3>

                            <div className={newsCSS.profile}>
                                <i className="ri-user-line"></i>
                                <small>Siska Maenda</small>
                                <i className="ri-time-line"></i>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                    </div>

                    <div className={newsCSS.card}>
                        <img src={news_pic03} alt="news-image" />

                        <div className={newsCSS.news_content}>
                            <p>Lifestyle</p>
                            <h3>What is Lorem <br /> Ipsum?</h3>

                            <div className={newsCSS.profile}>
                                <i className="ri-user-line"></i>
                                <small>Siska Maenda</small>
                                <i className="ri-time-line"></i>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;