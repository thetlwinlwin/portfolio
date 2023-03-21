import './responsive.css';
import webImg from '../../../assets/portfolio_img/grab_web.png';
import phoneImg from '../../../assets/portfolio_img/grab_mobile.jpg';

function Responsive() {
    return (
        <div className="res-container">
            <div className="res-section">
                <div className="res-text">
                    <span className="res-title">
                        Responsive Design
                    </span>
                    <span className="res-body">
                        Responsive web design is about offering a seamless experience on any device. Since different web browsers render differently, websites must be tested to ensure that they are compatible.
                        Our Carefully crafted websites ensure appeal appearance on every screen.
                    </span>
                </div>
                <div className="res-photo">

                    <img className='web-photo' src={webImg} alt="img" />
                    <img className='phone-photo' src={phoneImg} alt="img" />

                </div>
            </div>
            <div className='res-btn-container'>
                <button>Go To Web</button>
            </div>
        </div>
    );
}

export default Responsive;