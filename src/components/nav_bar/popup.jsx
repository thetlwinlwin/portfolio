import { useEffect, useRef } from 'react';
import './popup.css';
import { createPortal } from 'react-dom';
import navIcons from './nav_icons';

export default function PopUp({ open, closePopupFunc, goToHome, goToWebDev, goToUX }) {
    const popupRef = useRef(null);
    useEffect(() => {
        const handler = (e) => {
            const refCurrent = popupRef.current;
            if (refCurrent !== null && !refCurrent.contains(e.target)) {
                closePopupFunc();
            }
        }
        document.body.addEventListener('mousedown', handler);

        return () => document.body.removeEventListener('mousedown', handler);
    },);


    if (!open) return null;
    return createPortal(
        <div className='overlay'>
            <div ref={popupRef} className="popup-wrapper">
                <span onClick={goToHome}>Home</span>
                <span onClick={goToWebDev}>Web Developmenet</span>
                <span onClick={goToHome}>UX Design</span>
                <span >Get Quote</span>
                <div className='nav-icons-wrapper'>
                    {navIcons}
                </div>

            </div>
        </div>, document.getElementById('popup'),
    );
}