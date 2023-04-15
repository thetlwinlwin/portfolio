import './second_intro_section.css';
import SectionShared from "../section_shared";
import AppTitle from "../shared_title";


export default function SecondIntroSection() {
    const child = <div className="second-intro-wrapper">
        <AppTitle titleText={'What We Do'} />
        <p className='para-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius elit quis diam efficitur, et sollicitudin metus scelerisque. Donec ac ornare augue. Vestibulum gravida augue sapien. Maecenas a purus felis. Curabitur feugiat tincidunt urna, at suscipit magna. Vestibulum pretium turpis non libero malesuada, eget aliquam urna laoreet. Donec suscipit suscipit posuere.
        </p>
    </div>;

    return <SectionShared viewHeight={'75vh'} child={child} />;
}