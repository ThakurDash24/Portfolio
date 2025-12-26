import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Research', href: '#research' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: isScrolled ? '1rem 0' : '2rem 0',
                background: isScrolled ? 'rgba(10, 10, 10, 0.3)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    ThakurDash<span style={{ color: 'var(--accent-gold)' }}>.</span>
                </a>

                <nav>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    style={{
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        opacity: 0.8,
                                    }}
                                    onMouseEnter={(e) => (e.target.style.opacity = '1', e.target.style.color = 'var(--accent-gold)')}
                                    onMouseLeave={(e) => (e.target.style.opacity = '0.8', e.target.style.color = 'inherit')}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
