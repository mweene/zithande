import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";


export default function Footer() {
    const color = '#29340b'

    return (
        <footer className="bg-slate-300 px-10 py-8">
            <section className="top flex place-items-baseline place-content-between">
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

                <Link to="/">
                    <img src={Logo} alt="logo" className="h-[4rem]" />
                </Link>

                <ul className="flex gap-4">

                </ul>
            </section>
            <section className="bottom"></section>
        </footer>
    );
}
