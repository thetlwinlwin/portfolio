import { useNavigate } from "react-router-dom";
import './go_case_btn.css';

function GoToStudy({ location }) {


    const navigate = useNavigate();
    function onclick() {
        if (location) navigate(location);
    }

    return <button onClick={onclick} className='btn'>
        <span>View Case Study</span>
    </button>
}



export default GoToStudy;