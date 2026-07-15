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
            <div className="wrapper">
                <div className="text">
                    <p className="tagline">
                        Zambian owned Female led Est.2011
                    </p>
                    <h1 className="">
                        Dependable supply, delivered on institutional terms
                    </h1>
                    <p className="">
                        Dependable procurement, supply chain, branding and business
                        support for institutions across zambia
                    </p>

                    <div className="ctas grid gap-3">
                        <Button type={'primary'} styles={''}>
                            Request a qoute
                            <ChevronRight size={20} />
                        </Button>
                        <Button>View our services</Button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="hero image" />
                </div>
            </div>

            <div className="sectors">
                <h2>Sectors we serve</h2>
                <div className="cards slider">
                    {sectorCards.map((c, i) => (
                        <div className="card" key={i}>{c}</div>
                    ))}
                    {sectorCards.map((c, i) => (
                        <div className="card" key={i}>{c}</div>
                    ))}
                </div>
            </div>

            <div className="value-pillars">
                <h2>What institutional buyers require from a supplier</h2>
                <p>
                    Reliability, responsiveness, compliance	and
                    commercial judgement. the standard we hold
                    ourselves to.
                </p>
                <div className="cards">
                    <div className="card">
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

            <div className="track-record">
                <h2>A track record built on consistency</h2>
                <p>
                    We are relationship	driven,	not	transactional
                    structured for long-term supply agreements, not one-off orders
                </p>

                <div className="cards">
                    <div className="cards">
                        <h3>Trusted delivery</h3>
                        <p>We understand operational urgency and treat deadlines as commitments</p>
                    </div>
                    <div className="cards">
                        <h3>Procurement	intelligence</h3>
                        <p>Smart sourcing and effective negotiation that optimizes value</p>
                    </div>
                    <div className="cards">
                        <h3>Local strength, national reach</h3>
                        <p>Proudly Zambian, and strategically positioned to scale regionally</p>
                    </div>
                </div>
                <a href="">meet the leadership</a>
            </div>

            <div className="four-divisions">
                <h2>Four divisions, one supplier</h2>

                <div className="cards">
                    {divisionsCards.map((d, i) => (
                        <div className="card" key={i}>
                            <h3>{d}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="compliance">
                <h3>Registred, Cleared, Accountable</h3>
                <div className="badges">
                    <div className="badge">zra</div>
                    <div className="badge">license</div>
                    <div className="badge">council</div>
                </div>
            </div>
        </section>
    );
}
