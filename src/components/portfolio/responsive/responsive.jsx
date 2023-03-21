import './responsive.css';
import img from '../../../assets/portfolio_img/img1.png';
import phoneImg from '../../../assets/portfolio_img/img2.png';

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

                    <picture>
                        <source media="(max-width: 800px)" srcset={phoneImg} />
                        <img src={img} alt="img" />
                    </picture>

                </div>
            </div>
            <div className='res-btn-container'>
                <button>Go To Web</button>
            </div>
        </div>
    );
}

export default Responsive;