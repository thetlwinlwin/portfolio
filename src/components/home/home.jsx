import './home.css';
import SpanAnimation from "./text_animation";
import { useState } from "react";
import { homeTextFinal, homeTextInitial } from "./constants";
import JumpToBtn from '../jump_to_btn/jump_to_btn';


function HomePage() {
    const [text, setText] = useState(homeTextInitial);
    const [isFinal, setIsFinal] = useState(false);

    function onClick() {
        setText(homeTextFinal);
        setIsFinal(true);
    }

    return (
        <div className="center-div">
            <span onClick={onClick}>
                <SpanAnimation textMap={text} />
            </span>
            {isFinal ? <JumpToBtn /> : null}
        </div>
    );
}
export default HomePage;
