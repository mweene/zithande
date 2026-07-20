import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="relative bg-white border-b border-[#dfe3d6]">
            <div className="flex place-content-between place-items-center py-3 px-10">
                <Link to="/">
                    <img src={Logo} alt="logo" className="h-14" />
                </Link>
                <button
                    className="nav-menu cursor-pointer"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <Menu size={25} color="#29340b"/>
                </button>
            </div>
            {isMenuOpen && <MobileMenu onClick={() => setIsMenuOpen(false)} />}
        </nav>
    );
}

const MobileMenu = ({ onClick }) => {
    return (
        <div
            className={`
              menu bg-[#eef7dc] w-full h-dvh md:w-2/3 absolute inset-0
              flex flex-col place-content-between
            `}
        >
            <button
                onClick={onClick}
                className="self-end cursor-pointer p-5 pt-7"
            >
                <X size={30} color="#455714"/>
            </button>
            <ul className="my-8 p-5 px-7 [&_li]:py-2.5">
                <li>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to="/services">
                        <span>Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/industries">
                        <span>Industries</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>

            <div className="bottom-sec px-7 pb-30">
                <div className="contact">
                    <p>[contact info]</p>
                    <p>zithandeltd@gmail.com</p>
                    <p>+260 966 001 277</p>
                </div>

                <div className="mt-4">
                    <p>[visit us]</p>
                    <p>visit in rhodespark lusaka</p>
                </div>
            </div>
        </div>
    );
};
