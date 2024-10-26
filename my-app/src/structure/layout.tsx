import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import Main from "./main/main"
import ParallaxDots from "./main/components/background/ParallaxDots";

export function Layout() {


    return (
        <div>
            <ParallaxDots />
            <Header />
            <main>
                <Main />
            </main>
            <Footer />
        </div>
    )
}