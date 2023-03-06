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
        <article className="home-article">
            <div className='home-div'>
                <span className='text-host' onClick={onClick}>
                    <SpanAnimation textMap={text} isFinal={isFinal} />
                </span>
                {isFinal ? <JumpToBtn /> : null}
            </div>
        </article>
    );
}
export default HomePage;
