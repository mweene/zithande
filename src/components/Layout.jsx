import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
            <Navbar />
            {/* Main content changes here depending on the URL */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
