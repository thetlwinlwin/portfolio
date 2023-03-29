import './home.css';
import NavBar from '../nav_bar/nav_bar';
import Responsive from "../portfolio/responsive/responsive";
import useInView from '../intersection_hook';
import { useMemo, useRef } from 'react';

const homeText = [
    { title: 'Who We Are?' },
    { title: 'What We Do' },
]

function HomePage() {
    const option = useMemo(() => ({ rootMargin: '0px', threshold: 0.8, }), [])

    const homeEndRef = useRef(null);
    const clientRef = useRef(null);
    const responsiveRef = useRef(null);

    const isHomeEndInView = useInView(homeEndRef, option);
    const isClientInView = useInView(clientRef, option);
    const isResponsiveInView = useInView(responsiveRef, option);

    console.log(isResponsiveInView);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className='section'>
                    <span className='title-text'>{homeText[0].title}</span>
                </div>
                <div ref={homeEndRef} className={`section hide${isHomeEndInView ? 'show' : ''}`}>
                    <div className='wrapper home-end-gap'>
                        <span className='title-text'>{homeText[1].title}</span>
                        <p className='para-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius elit quis diam efficitur, et sollicitudin metus scelerisque. Donec ac ornare augue. Vestibulum gravida augue sapien. Maecenas a purus felis. Curabitur feugiat tincidunt urna, at suscipit magna. Vestibulum pretium turpis non libero malesuada, eget aliquam urna laoreet. Donec suscipit suscipit posuere.

                        </p>
                    </div>
                </div>
                <div ref={clientRef} className={`section hide${isClientInView ? 'show' : ''}`}>
                    <div className='wrapper client-gap'>
                        <span className='title-text'> Our Clients</span>
                        <p className='para-text'>
                            Apple
                        </p>
                        <p className='para-text'>
                            Grab
                        </p>
                        <p className='para-text'>
                            Sun
                        </p>
                        <p className='para-text'>
                            Moon
                        </p>
                    </div>
                </div>
                <div ref={responsiveRef} className={`section hide${isResponsiveInView ? 'show' : ''}`}>
                    < Responsive />
                </div>
                <div className="section ">
                    <span className="title-text">
                        Section 5
                    </span>
                </div>
                <div className="section " >
                    <span className="title-text">
                        Section 6
                    </span>
                </div>

            </div >
        </>

    );



}
export default HomePage;
