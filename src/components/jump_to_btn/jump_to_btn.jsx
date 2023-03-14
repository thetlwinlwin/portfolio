import { useNavigate } from 'react-router-dom';
import './jump_to_btn.css';

function JumpToBtn() {
    const navigate = useNavigate();
    function jumpToPortfolioPage() {
        navigate('/portfolio');
    }


    return (
        <div className="jump-to-btn" onClick={jumpToPortfolioPage}>
            <svg className='btn-svg' width="80" height="80" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrow1' d="M120.216 66.5536L153.838 101.521C155.752 103.511 155.752 106.739 153.838 108.729L120.216 143.696C116.547 147.512 110.439 143.557 112.111 138.449L122.485 106.768C122.833 105.703 122.833 104.547 122.485 103.482L112.111 71.8008C110.439 66.6924 116.547 62.7377 120.216 66.5536Z" fill="white" />
                <path className='arrow2' d="M68.1862 66.4912L101.808 101.458C103.722 103.449 103.722 106.676 101.808 108.667L68.1862 143.634C64.5171 147.45 58.4086 143.495 60.0813 138.387L70.4546 106.706C70.8035 105.64 70.8035 104.485 70.4546 103.419L60.0813 71.7384C58.4086 66.63 64.5171 62.6753 68.1862 66.4912Z" fill="white" />
                <path className='circle' fillRule="evenodd" clipRule="evenodd" d="M105 210C162.99 210 210 162.99 210 105C210 47.0101 162.99 0 105 0C47.0101 0 0 47.0101 0 105C0 162.99 47.0101 210 105 210ZM105.308 200C157.775 200 200.308 157.467 200.308 105C200.308 52.5329 157.775 10 105.308 10C52.8406 10 10.3077 52.5329 10.3077 105C10.3077 157.467 52.8406 200 105.308 200Z" fill="white" />
            </svg>
        </div >
    );
}
export default JumpToBtn;