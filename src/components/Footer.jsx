import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import FaceBook from "../assets/facebook.svg";
import Instagram from "../assets/insta.svg";
import X from "../assets/x.svg";

export default function Footer() {
    const color = '#29340b'

    return (
        <footer className="border-t-2 px-10 py-8">
            <section className="top flex place-items-baseline place-content-between">
                <Link to="/">
                    <img src={Logo} alt="logo" className="h-[4rem] w-fit" />
                </Link>

                <ul className="flex gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/industries">Industries</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

                <ul className="flex gap-4">
                    <li>
                        <img src={FaceBook} alt="facebook"/>
                    </li>
                    <li>
                        <img src={X} alt="twitter"/>
                    </li>
                    <li>
                        <img src={Instagram} alt="instagram"/>
                    </li>
                </ul>
            </section>
            <section className="bottom"></section>
        </footer>
    );
}
