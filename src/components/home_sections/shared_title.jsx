function AppTitle({ titleText }) {
    return (
        <span style={{
            textAlign: 'center',
            fontSize: 'max(5vw,5vh)',
        }}
        >
            {titleText}
        </span>
    );
}

export default AppTitle;