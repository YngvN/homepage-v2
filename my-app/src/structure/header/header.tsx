import React from "react";
import Nav from "./nav/nav";
import Logo from "./nav/components/logo/logo";


export function Header() {

    return (
        <header>
            <Logo />
            <Nav />
        </header>
    );
}