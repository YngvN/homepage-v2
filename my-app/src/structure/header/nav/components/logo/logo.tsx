import React from 'react';
import './logoStyle.scss';

const Logo: React.FC = () => {
    return (
        <div className='logo-container'>
            <div className="logo">

                <span className='logo-y logo-line y-1'></span>
                <span className='logo-y logo-line y-2'></span>
                <span className='logo-y logo-line y-3'></span>
                <span className='grey-block'></span>
                <span className='logo-n logo-line n-1'></span>
                <span className='logo-n logo-line n-2'></span>
                <span className='logo-n logo-line n-3'></span>
            </div>
        </div>
    );
};

export default Logo;
