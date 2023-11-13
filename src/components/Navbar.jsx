import { useState } from 'react';
import logo from '../assets/logo.svg';
import { GrLanguage } from 'react-icons/gr';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navItems = [
        { link: 'Overview', path: 'home' },
        { link: 'Feature', path: 'feature' },
        { link: 'About', path: 'about' },
        { link: 'Pricing', path: 'pricing' },
    ];

    return (
        <>
            {/* large screen navbar */}
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg font-medium container mx-auto flex justify-between items-center">
                    <div className="flex space-x-14 items-center">
                        {/* logo and website name */}
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img
                                src={logo}
                                alt="Main logo. Purple to pink gradient."
                                className="w-10 inline-block items-center"
                            />
                            <span>ABC</span>
                        </a>
                        {/* showing nav elemnts using map */}
                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ link, path }) => (
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    to={path}
                                    key={link}
                                    className="block hover:text-gray-300 cursor-pointer"
                                >
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* language and signup button */}
                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="/" className="hidden lg:flex items-center hover:text-secondary">
                            <GrLanguage className="mr-2" /> <span>Language</span>
                        </a>
                        <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>

                    {/* Menu btn displayed mobile-only. */}
                    <div className="md:hidden ">
                        <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                            {isMenuOpen ? (
                                <FaXmark className="w-6 h-6 text-primary" />
                            ) : (
                                <FaBars className="w-6 h-6 text-primary" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            {/* mobile navbar */}
            <div
                className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl text-center ${
                    isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
                }`}
            >
                {navItems.map(({ link, path }) => (
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to={path}
                        key={link}
                        className="block text-white hover:text-gray-300 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
