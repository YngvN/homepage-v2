import React, { useState, useEffect } from "react";
import Nav from "./nav/nav";
import Logo from "./nav/components/logo/logo";
import { Link } from 'react-router-dom';

export function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            // If we scroll down, hide the header
            setShowHeader(false);
        } else {
            // If we scroll up, show the header
            setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header style={{
            transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out'
        }}>
            <Link to="/">
                <Logo />
            </Link>
            <Nav />
        </header>
    );
}
