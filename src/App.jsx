import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages";

// 1. Shared Layout Component (Shared across all pages)
function Layout() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                fontFamily: "sans-serif",
            }}
        >
            {/* Persistent Navigation */}
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>
                    Home
                </Link>
                <Link to="/about" style={styles.link}>
                    About
                </Link>
            </nav>

            {/* Main content changes here depending on the URL */}
            <main style={{ flex: 1, padding: "20px" }}>
                <Outlet />
            </main>

            {/* Persistent Footer */}
            <footer style={styles.footer}>
                <p>© 2026 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

// 2. Page Components
function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>The header and footer stay exactly where they are.</p>
        </div>
    );
}

// 3. Application Routing Structure
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* The Layout component wraps the other routes */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// Minimal styling for structure
const styles = {
    nav: {
        display: "flex",
        gap: "20px",
        padding: "15px 20px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
    },
    footer: {
        padding: "15px 20px",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#666",
    },
    link: {
        textDecoration: "none",
        color: "#0070f3",
        fontWeight: "bold",
    },
};
