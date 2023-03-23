import './responsive.css';
import webImg from '../../../assets/portfolio_img/grab_web.png';
import phoneImg from '../../../assets/portfolio_img/grab_mobile.jpg';
import GoToStudy from '../../go_case_btn/go_case_btn';

function Responsive() {
    return (
        <div className="res-container">
            <div className="res-section">
                <div className="res-text">
                    <span className="res-title sec-font">
                        Responsive Design Development
                    </span>
                    <a href="http://apple.com" className='res-link'>Apple</a>
                    <span className="res-summary sec-font">
                        Responsive web design is about offering a seamless experience on any device. Since different web browsers render differently, websites must be tested to ensure that they are compatible.
                        Our Carefully crafted websites ensure appeal appearance on every screen.
                    </span>
                    <GoToStudy location={'/case-study/reponsive'} />
                </div>
                <div className="res-photo">
                    <img className='web-photo' src={webImg} alt="img" />
                    <img className='phone-photo' src={phoneImg} alt="img" />
                </div>
                <div className='res-btn-container inside'>
                    <button>Go To Web</button>
                </div>
            </div>
            <div className='res-btn-container outside'>
                <button>Go To Web</button>
            </div>
        </div>
    );
}

export default Responsive;