import './clients_section.css';
import SectionShared from "../section_shared";
import AppTitle from "../shared_title";



export default function ClientsSection() {
    const child = <div className="clients-wrapper">
        <AppTitle titleText={'Our Clients'} />
        <p className='para-text'>
            Apple
        </p>
        <p className='para-text'>
            Grab
        </p>
        <p className='para-text'>
            Sun
        </p>
        <p className='para-text'>
            Moon
        </p>
    </div>;

    return <SectionShared viewHeight={'75vh'} child={child} />;
}