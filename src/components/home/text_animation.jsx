import "./home.css";

function SpanAnimation(props) {
    return (
        <>
            {Object.entries(props.textMap).map(([key, value]) => (
                <span key={key} className="home-text">
                    {value + " "}
                </span>
            ))}
        </>
    );
}

export default SpanAnimation;
