import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Industries, Services } from "./pages";
import Layout from "./components/Layout";
import "./App.css";

{
    /**/
}
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
