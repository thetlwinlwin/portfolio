import { useState } from 'react';
import './portfolio_page.css';
import ImgList from './constant';
import GoToPage from '../go_to_page/go_to_page';

function PortfolioPage() {
    const [currentIndex, setcurrentIndex] = useState(0);

    function handleScroll() {
        console.log(window.scrollY)
    };

    function clickToMove(index) {
        setcurrentIndex(index);
    }

    return (
        <article className="portfolio-page">
            <h1 className='title'>Our Clients</h1>
            <div className='projects-showcase'>
                <div className="img-container">
                    <img src={ImgList[currentIndex].imgSrc} alt='img' onScroll={handleScroll} key={ImgList[currentIndex].imgSrc} />
                </div>
                <div className='next-dot'>
                    {
                        ImgList.map(
                            (_, index) => {
                                return <span key={index} onClick={() => clickToMove(index)} className={index === currentIndex ? 'active' : 'dot'}></span>
                            }
                        )
                    }
                </div>
            </div >
            <GoToPage url={ImgList[currentIndex].url} />
        </article >


    );

}
export default PortfolioPage;