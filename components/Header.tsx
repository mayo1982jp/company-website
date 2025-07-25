import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const navLinks = [
    { name: 'Home', path: '/' },
    { name: '事業内容', path: '/services' },
    { name: '企業情報', path: '/company' },
    { name: 'ニュース', path: '/news' },
    { name: '採用情報', path: '/careers' },
    { name: 'お問い合わせ', path: '/contact' },
];

const Header: React.FC = () => {
    const activeLinkStyle = {
        color: 'white',
        opacity: 1,
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-300">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between bg-black/30 backdrop-blur-md rounded-b-lg border-b border-white/10">
                <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-white">
                    <LogoIcon />
                    QuantumLeap
                </NavLink>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                            className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;