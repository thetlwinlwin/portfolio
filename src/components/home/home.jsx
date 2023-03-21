import './home.css';
import NavBar from '../nav_bar/nav_bar';
import Responsive from "../portfolio/responsive/responsive";

const homeText = [
    { title: 'Who We Are?' },
    { title: 'What We Do' },
]

function HomePage() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="section home">
                    <span className='home-text'>{homeText[0].title}</span>
                </div>
                <div className="section home">
                    <span className='home-text'>{homeText[1].title}</span>
                </div>
                <div className="section home">
                    <span className="home-text">
                        Our Clients
                    </span>
                </div>
                <Responsive />
                <div className="section home">
                    <span className="home-text">
                        Section 5
                    </span>
                </div>
                <div className="section home" >
                    <span className="home-text">
                        Section 6
                    </span>
                </div>

            </div >
        </>

    );



}
export default HomePage;
