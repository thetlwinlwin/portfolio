import './go_to_page.css';

function GoToPage({ url }) {
    return (
        <div className='link-to-page-container' onClick={() => window.open(url)}>
            <span className='btn'>Go To Page</span>
        </div>
    );
}
export default GoToPage;