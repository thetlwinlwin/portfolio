import './nav_bar.css';

import { ReactComponent as Call } from '../../assets/nav_icons/call.svg';
import { ReactComponent as Linkedin } from '../../assets/nav_icons/linkedin.svg';
import { ReactComponent as Insta } from '../../assets/nav_icons/insta.svg';
import { ReactComponent as Fb } from '../../assets/nav_icons/fb.svg';
import { ReactComponent as Mail } from '../../assets/nav_icons/mail.svg';

export default function NavBar() {
    return (
        <div className="nav-container">
            <span>Logo name</span>
            <div className="nav-icons-container">
                <Call className='nav-icons' />
                <Mail className='nav-icons' />
                <Insta className='nav-icons' />
                <Fb className='nav-icons' />
                <Linkedin className='nav-icons' />

            </div>
        </div>
    );
}