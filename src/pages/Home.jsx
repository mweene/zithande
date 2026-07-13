export default function Home() {
    return (
        <section className="home">
            <div className="p-4">
                <p className="tagline text-sm">
                    Zambian owned Female led Est.2011
                </p>
                <h1 className="text-[2rem] font-bold">
                    A supplier you don't have to chase
                </h1>
                <p className="my-4 text-slate-600">
                    Dependable procurement, supply chain, branding and business
                    support for institutions across zambia
                </p>

                <div className="ctas grid">
                    <button>request a qoute</button>
                    <button>view our services</button>
                </div>
                <div className="hero-image"></div>
            </div>

            <div className="value-pillars">
                <h2>The gap between a good tender and a good supplier</h2>
                <p>
                    institutions need suppliers who are reliable, responsive,
                    complaint and commercially intelligent -- thats the gap we
                    close.
                </p>
                <div className="cards">
                    <div className="card">
                        fast, dependable sourcing, timely delivery, branding &
                        visibilty, scalable contracts
                    </div>
                </div>
            </div>

            <div className="why-choose-us">
                <h2>we treat your dead line like our own</h2>
                <p>
                    Relationship driven, not transactional -- built for repeat
                    business, not one-off supply.
                </p>

                <div className="cards">
                    <div className="cards">
                        trusted delivery-procurment intelligence - local strngth
                        national reach
                    </div>
                </div>
                <a>meet our leadership</a>
            </div>

            <div className="compliance">
                <h2>Registered, cleared, accountable</h2>
            </div>

            <div className="closing-ctas">
                <h2>your next order doesnt have to be a gumble</h2>
                <button>get in touch</button>
            </div>
        </section>
    );
}
