import './home.css';
import NavBar from '../nav_bar/nav_bar';
import Responsive from "../portfolio/responsive/responsive";
import useInView from '../intersection_hook';
import { useEffect, useRef } from 'react';

const homeText = [
    { title: 'Who We Are?' },
    { title: 'What We Do' },
]

function HomePage() {
    const homeEndRef = useRef(null);
    const isInView = useInView(homeEndRef, {
        rootMargin: "0px",
        threshold: 0.8,
    });

    console.log(isInView);



    return (
        <>
            <NavBar />
            <div className="container">
                <div className="section center">
                    <span className='home-text'>{homeText[0].title}</span>
                </div>
                <div ref={homeEndRef} className={`center home-end ${isInView ? 'home-end-show' : ''}`}>
                    <div className='home-end-wrapper'>
                        <span className='home-text'>{homeText[1].title}</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius elit quis diam efficitur, et sollicitudin metus scelerisque. Donec ac ornare augue. Vestibulum gravida augue sapien. Maecenas a purus felis. Curabitur feugiat tincidunt urna, at suscipit magna. Vestibulum pretium turpis non libero malesuada, eget aliquam urna laoreet. Donec suscipit suscipit posuere.

                        </p>
                    </div>
                </div>
                <div className="section center">
                    <div className='home-end-wrapper'>
                        <span className='home-text'> Our Clients</span>
                        <p>
                            Apple
                        </p>
                        <p>
                            Grab
                        </p>
                        <p>
                            1 Stop Solar
                        </p>
                        <p>
                            Aim High
                        </p>
                    </div>
                </div>
                <Responsive />
                <div className="section center">
                    <span className="home-text">
                        Section 5
                    </span>
                </div>
                <div className="section center" >
                    <span className="home-text">
                        Section 6
                    </span>
                </div>

            </div >
        </>

    );



}
export default HomePage;
