import React, { useRef, useEffect } from "react";
import '../home/home.scss';

const Home: React.FC = () => {
    const contentListRef = useRef<HTMLUListElement>(null);

    const scrollNext = () => {
        if (contentListRef.current) {
            const currentScroll = contentListRef.current.scrollTop;
            const itemHeight = window.innerHeight; // Each item is 100vh
            contentListRef.current.scrollTo({
                top: currentScroll + itemHeight,
                behavior: 'smooth',
            });
        }
    };

    const scrollPrev = () => {
        if (contentListRef.current) {
            const currentScroll = contentListRef.current.scrollTop;
            const itemHeight = window.innerHeight; // Each item is 100vh
            contentListRef.current.scrollTo({
                top: currentScroll - itemHeight,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollWheel = (event: WheelEvent) => {
        if (event.deltaY > 0) {
            scrollNext();
        } else {
            scrollPrev();
        }
    };

    useEffect(() => {
        const contentList = contentListRef.current;
        if (contentList) {
            contentList.addEventListener('wheel', handleScrollWheel);
        }

        return () => {
            if (contentList) {
                contentList.removeEventListener('wheel', handleScrollWheel);
            }
        };
    }, []);

    return (
        <div className="home-container">
            <ul className="content-list" ref={contentListRef}>
                <li className="list-item">
                    <div className="text-content">
                        <h2>Hi there!</h2>
                        <p>I'm a programmer with varied interests and you can check out some of my stuff here.</p>
                    </div>
                    <div className="image-content">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    </div>
                </li>
                <li className="list-item">
                    <div className="text-content">
                        <h2>Programmer</h2>
                        <p>I'm a former Noroff student. I studied Front-end Development, but I've also handled some back-end as well with SQL from USN.</p>
                    </div>
                    <div className="image-content">
                        <img src="./image/img_programming.jpg" alt="Programming Placeholder" />
                    </div>
                </li>
                <li className="list-item">
                    <div className="text-content">
                        <h2>Musician</h2>
                        <p>Producer, vocals, guitar, piano +++. I've studied music as well at HVL.</p>
                        <p>These days I've mostly focused on being a music producer using Logic Pro.</p>
                    </div>
                    <div className="image-content">
                        <img src="./image/img_mixer.jpg" alt="Music Mixer" />
                    </div>
                </li>
            </ul>
            <button className="scroll-button prev" onClick={scrollPrev}>&#8593;</button>
            <button className="scroll-button next" onClick={scrollNext}>&#8595;</button>
        </div>
    );
}

export default Home;
