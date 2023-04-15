import './nav_bar.css';
import navIcons from './nav_icons';


export default function NavBar({ btnOnclick }) {



    return (
        <div className="nav-container">
            <span>Logo name</span>
            <div className="nav-icons-container">
                {navIcons}
            </div>
            <div className='menu-wrapper' onClick={btnOnclick}>
                <div className='burger'></div>
                <div className='burger'></div>
                <div className='burger'></div>
            </div>
        </div>
    );
}