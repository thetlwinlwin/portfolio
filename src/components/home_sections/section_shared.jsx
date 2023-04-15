export default function SectionShared({ child, viewHeight }) {
    return (
        <div style={{
            height: viewHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 'clamp(0.8rem, 0.8rem + 1vw, 2rem)',
        }}>
            {child}
        </div >
    );
}