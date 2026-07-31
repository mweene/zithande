import Button from "../components/Button";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [trackRecord, setTrackRecord] = useState(0);

    const sectorCards = ['government ministries','local authorities','mining companies','construction firms','schools & universities','Hospitals & clinics','NGOs','Banks','SMEs','retail & hospitality sectors'];
    const divisionsCards = [
        'General supply', 'Branding & Coperate identity',
        'Food supply & Catering', 'Busines support services'
    ];
    const trackRecords = [
        { id: 'trusted', header: "Trusted delivery", paragraph: "We understand operational urgency and treat deadlines as commitments" },
        { id: 'procurement', header: "Procurement intelligence", paragraph: "Smart sourcing and effective negotiation that optimizes value" },
        { id: 'local', header: "Local strength, national reach", paragraph: "Proudly Zambian, and strategically positioned to scale regionally" }
    ];


    const handlePrev = () => {
        if (trackRecord <= 0) {
            setTrackRecord(trackRecords.length - 1)
        } else {
            setTrackRecord(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if (trackRecord === trackRecords.length - 1) {
            setTrackRecord(0)
        } else {
            setTrackRecord( prev => prev + 1)
        }
    }
    return (
        <section className="home">
            <div className="hero bg-[#f2f2ed]">
                <div className="text text-center grid place-items-center">
                    <p className="tagline">
                        Zambian owned Female led Est.2011
                    </p>
                    <h1 className="md:w-[20ch]">
                        Dependable Procurement for Institutions
                    </h1>
                    <p className="lead md:w-[65ch]">
                        We provide reliable procurement, supply chain solutions, branding, and business support. Serving institutions across Zambia with consistency and trust.
                    </p>

                    <div className="ctas flex flex-col md:flex-row gap-4 md:place-content-center mt-4 w-full">
                        <Link to="/contact" className="bg-[#02261a] rounded-full p-3 py-[1.1rem] md:px-6 flex place-items-center place-content-center gap-1">
                            <span className="text-white">Request a qoute</span>
                            <ChevronRight size={20} color="white" />
                        </Link>

                        <Link to="/services" className="border-2 border-[#02261a] rounded-full p-3 py-[1.1rem] md:px-6">
                            View our services
                        </Link>
                    </div>
                </div>
                <div className="image md:bg-contain bg-cover bg-center h-100 md:mx-40">
                </div>
            </div>

            <div className="sectors pt-16 pb-16 bg-[#f2f2ed]">
                <p className="text-center mb-4">Sectors we serve</p>
                <div className="cards slider">
                    {sectorCards.map((c, i) => (
                        <div className="card" key={i}>{c}</div>
                    ))}
                    {sectorCards.map((c, i) => (
                        <div className="card" key={i}>{c}</div>
                    ))}
                </div>
            </div>

            <div className="value-pillars bg-white py-20 px-6 md:px-15">
                <div className="text-center grid place-items-center">
                    <h2 className="md:w-[20ch]">
                        What institutional buyers require from a supplier
                    </h2>
                    <p className="mt-4 mb-8 md:w-[50ch]">
                        Reliability, responsiveness, compliance	and
                        commercial judgement. the standard we hold
                        ourselves to.
                    </p>
                </div>
                <div className="cards md:grid md:grid-cols-4 md:mt-4">
                    <div className="card">
                        <div className="text">
                            <h3>Fast dependable sourcing</h3>
                            <p>We source smartly and negotiate to protect your budget</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="text">
                            <h3>Timely delivery</h3>
                            <p>We value deadlines and understand operational urgency</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h3>Branding & Visibilty</h3>
                            <p>Uniforms, signage and corporate identity, done in-house</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h3>Scalable contracts</h3>
                            <p>From	one-off	orders to recurring, long-term agreements</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="track-record my-16 py-12 px-6 grid md:px-60 bg-[#f2f2ed]">
                <div className="track-record-top md:flex gap-8 place-items-end mb-15">
                    <div className="text">
                        <h2 className="mb-4">A track record built on consistency</h2>
                        <div className="flex gap-4">
                            <p className="">
                                We are relationship	driven,	not	transactional
                                structured for long-term supply agreements, not one-off orders
                            </p>

                            <div className="buttons self-end flex gap-4 h-fit">
                                <button
                                    onClick={handlePrev}
                                    className={`border-2 border-[#1e2608] bg-[#c1f063]! p-2 rounded-full`}
                                >
                                    <ChevronLeft color="#29340b" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="border-2 border-[#1e2608] bg-[#c1f063]! p-2 rounded-full"
                                >
                                    <ChevronRight color="#29340b"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`
                    cards md:flex gap-6 place-content-between place-items-center
                `}>
                    <div
                        key={trackRecords[trackRecord].id}
                        className="card bg-[#c1f063] border-2 border-[#1e2608] p-6 md:p-12 rounded-2xl text-center md:h-60 w-full"
                    >
                        <h3 className="mb-4">{trackRecords[trackRecord].header}</h3>
                        <p className="mt-2 text-[#29340b]!">{trackRecords[trackRecord].paragraph}</p>
                    </div>
                </div>
                <Link to="about">
                    <p className="flex items-center gap-1 mt-8 text-[#1e2608] underline">
                        Meet the leadership
                        <ChevronRight size={17}/>
                    </p>
                </Link>
            </div>



            <div className="four-divisions py-20 px-6 bg-white text-center grid place-content-center">
                <h2 className="mb-4">Four divisions, one supplier</h2>

                <div className="cards grid md:grid-cols-2 gap-2 w-4/5 place-self-center">
                    {divisionsCards.map((d, i) => (
                        <div key={i} className="card overflow-hidden h-30 relative z-20">
                            <h3>
                                <span className="absolute top-0 left-0 -mt-5 -z-10">
                                    {i + 1}
                                </span>
                                {d}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>



            <div className="compliance my-16 py-12 px-6 text-center grid place-content-center bg-[#f2f2ed]">
                <h2>Registred, Cleared, Accountable</h2>
                <div className="badges text-center mt-8 grid gap-2 [&_.badge]:rounded-2xl [&_.badge]:py-4 [&_.badge]:px-8 place-self-center">
                    <div className="badge flex gap-2 place-items-cener border-2 bg-[#f8ffe6] text-[#1e2608] relative overflow-clip z-1">
                        ZRA Tax Clearance Certificate
                    </div>
                    <div className="badge flex gap-2 place-items-center border-2 bg-[#f8ffe6] text-[#1e2608] relative overflow-clip z-1">
                        Certificate of Incorporation
                    </div>
                </div>
            </div>

            <div className="in-touch bg-[#02261a] grid place-content-center p-4 py-10 md:p-15 text-center">
                <div className="m:mx-20 md:m-10 p-10 rounded-3xl grid place-items-center ">
                    <h2 className="md:w-[23ch] mb-8 text-white!">
                        Discuss your procurement
                        requirements with our team
                    </h2>

                    <Link to="/contact">
                        <Button styles="w-fit font-[500] border-[#c1f063] bg-[#c1f063]! flex">
                            Get in touch
                            <ChevronRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
