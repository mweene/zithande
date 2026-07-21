import Button from "../components/Button";
import { ChevronRight } from "lucide-react";
import heroImage from "../assets/hero.png";

export default function Home() {
    const sectorCards = [1,2,3,4,5,6,7,8,9,10];
    const divisionsCards = [
        'General supply', 'Branding & Coperate identity',
        'Food supply & Catering', 'Busines support services'
    ];
    return (
        <section className="home">
            <div className="hero">
                <div className="text text-center grid place-items-center">
                    <p className="tagline">
                        Zambian owned Female led Est.2011
                    </p>
                    <h1 className="md:w-[23ch]">
                        Dependable supply, delivered on institutional terms
                    </h1>
                    <p className="lead md:w-[55ch]">
                        Dependable procurement, supply chain, branding and business
                        support for institutions across zambia
                    </p>

                    <div className="ctas grid md:flex gap-3 md:place-content-center mt-4 w-full">
                        <Button type={'primary'} styles={'flex place-items-center place-content-center gap-1'}>
                            Request a qoute
                            <ChevronRight size={20} />
                        </Button>
                        <Button>View our services</Button>
                    </div>
                </div>
                <div className="hero-image mt-6">
                    <img src={heroImage} alt="hero image" className="w-full h-16" />
                </div>
            </div>

            <div className="sectors mt-20 ">
                <h2 className="text-center mb-4">Sectors we serve</h2>
                <div className="cards slider">
                    {sectorCards.map((c, i) => (
                        <div className="card" key={i}>{c}</div>
                    ))}
                    {sectorCards.map((c, i) => (
                        <div className="card" key={i}>{c}</div>
                    ))}
                </div>
            </div>

            <div className="value-pillars bg-[#f8ffe6] my-16 py-12 px-6 md:px-15">
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
                    <div className="card bg-[#29340b]">
                        <div className="text">
                            <h3>Fast dependable sourcing</h3>
                            <p>We source smartly and negotiate to protect your budget</p>
                        </div>
                        <img src="-" alt="card image"/>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h3>Timely delivery</h3>
                            <p>We value deadlines and understand operational urgency</p>
                        </div>
                        <img src="-" alt="card image"/>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h3>Branding & Visibilty</h3>
                            <p>Uniforms, signage and corporate identity, done in-house</p>
                        </div>
                        <img src="-" alt="card image"/>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h3>Scalable contracts</h3>
                            <p>From	one-off	orders to recurring, long-term agreements</p>
                        </div>
                        <img src="-" alt="card image"/>
                    </div>
                </div>
            </div>

            <div className="track-record my-16 py-12 px-6 grid place-items-center md:px-15">
                <div className="text-center grid place-items-center">
                    <h2 className="md:w-[20ch]">A track record built on consistency</h2>
                    <p className="mt-4 mb-8 md:w-[50ch]">
                        We are relationship	driven,	not	transactional
                        structured for long-term supply agreements, not one-off orders
                    </p>
                </div>

                <div className={`
                    cards grid gap-4 [&_.card]:bg-[#d1deb3] [&_.card]:p-4 [&_.card]:rounded-xl
                    [&_.card]:h-36  [&_.card]:w-fit [&_.card]:text-center place-items-center md:grid-cols-3
                `}>
                    <div className="card">
                        <h3>Trusted delivery</h3>
                        <p className="mt-2">We understand operational urgency and treat deadlines as commitments</p>
                    </div>
                    <div className="card">
                        <h3>Procurement	intelligence</h3>
                        <p className="mt-2">Smart sourcing and effective negotiation that optimizes value</p>
                    </div>
                    <div className="card">
                        <h3>Local strength, national reach</h3>
                        <p className="mt-2">Proudly Zambian, and strategically positioned to scale regionally</p>
                    </div>
                </div>
                <a href="" className="flex items-center gap-1 mt-8 text-[#29340b] underline">
                    Meet the leadership
                    <ChevronRight size={17}/>
                </a>
            </div>

            <div className="four-divisions mb-16 py-12 px-6 bg-[#f8ffe6] text-center grid place-content-center">
                <h2 className="md:w-[20ch]">Four divisions, <br/> one supplier</h2>

                <div className="cards w-4/5 place-self-center">
                    {divisionsCards.map((d, i) => (
                        <div className="card" key={i}>
                            <h3>{i+1}. {d}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="compliance my-16 py-12 px-6 text-center grid place-content-center">
                <h2>Registred, Cleared, Accountable</h2>
                <div className="badges mt-4 flex gap-2 [&_.badge]:p-2 [&_.badge]:bg-[#d1deb3] place-self-center">
                    <div className="badge">zra</div>
                    <div className="badge">license</div>
                    <div className="badge">council</div>
                </div>
            </div>

            <div className="in-touch bg-white grid place-content-center p-15 text-center">
                <h2 className="md:w-[23ch]">
                    Discuss your procurement
                    requirements with our team
                </h2>
                <Button>Get in touch</Button>
            </div>
        </section>
    );
}
