
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Header />
            <main className="flex-grow pt-14">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
