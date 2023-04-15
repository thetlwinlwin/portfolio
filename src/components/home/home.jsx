import './home.css';
import NavBar from '../nav_bar/nav_bar';
import Responsive from "../portfolio/responsive/responsive";
import useInView from '../intersection_hook';
import { useMemo, useRef, useState } from 'react';
import FirstIntro from "../home_sections/first_intro/first_intro_section";
import SecondIntroSection from "../home_sections/second_intro/second_intro_section";
import ClientsSection from "../home_sections/clients_section/clients_section";
import PopUp from '../nav_bar/popup';



function HomePage() {
    const option = useMemo(() => ({ rootMargin: '0px', threshold: 0.7, }), [])
    const scrollOption = useMemo(() => ({ behavior: 'smooth', block: 'center', }), []);
    const [isOpenPopup, setOpenPopup] = useState(false);

    const homeStartRef = useRef(null);
    const homeEndRef = useRef(null);
    const clientRef = useRef(null);
    const responsiveRef = useRef(null);

    const isHomeEndInView = useInView(homeEndRef, option);
    const isClientInView = useInView(clientRef, option);
    const isResponsiveInView = useInView(responsiveRef, option);


    function goTo(ref) {
        if (ref.current) {
            ref.current.scrollIntoView(scrollOption);
            setOpenPopup(false);
        }
    }


    return (
        <>
            <NavBar btnOnclick={() => setOpenPopup(true)} />
            <PopUp closePopupFunc={() => setOpenPopup(false)} open={isOpenPopup} goToHome={() => goTo(homeStartRef)} goToWebDev={() => goTo(responsiveRef)} />
            <div ref={homeStartRef}>
                <  FirstIntro />
            </div>
            <div ref={homeEndRef} className={`section hide ${isHomeEndInView ? 'show' : ''}`}>
                <SecondIntroSection />
            </div>
            <div ref={clientRef} className={`section hide ${isClientInView ? 'show' : ''}`}>
                <ClientsSection />
            </div>
            <div ref={responsiveRef} className={`section hide${isResponsiveInView ? 'show' : ''}`}>
                < Responsive />
            </div>
            <div className="section section-height">
                <span className="title-text">
                    Section 5
                </span>
            </div>
            <div className="section section-height" >
                <span className="title-text">
                    Section 6
                </span>
            </div>
        </>
    );



}
export default HomePage;
