import React, { useEffect, useState } from 'react';
import './parallaxDots.scss';

const ParallaxDots: React.FC = () => {
    const [dotColors, setDotColors] = useState<string[]>(Array(100).fill('#000000'));

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColors = () => {
        setDotColors(dotColors.map(() => getRandomColor()));
    };

    useEffect(() => {
        const handleScroll = () => {
            changeColors();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-dots">
            <div className="layer">
                {dotColors.map((color, index) => (
                    <div
                        key={`dot-${index}`}
                        className="dot"
                        style={{
                            backgroundColor: color,
                            left: `${(index % 10) * 10}%`,
                            top: `${Math.floor(index / 10) * 20}%`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ParallaxDots;
