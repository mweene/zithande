export default function About() {
    const coreValuesPills = [1,2,3,4,5,6,7,8,9];
    const leadership = [
        {
            id: 1,
            role: 'Creative Lead',
            name: 'Astrida Chomba Willombe',
            bio: 'Accomplished business professional with experience in banking, relationship management, risk management, consulting and enterprise development. Background spans wholesale trade, manufacturing, pharmaceuticals, agriculture, communications and technology. Provides strategic leadership, financial discipline and client-centred direction',
            imageUrl: '-'
        },
        {
            id: 2,
            role: 'Chief Operating Officer',
            name: 'Kochiwe Jere',
            bio: 'Results-oriented operations executive with strong experience in purchasing & procurement systems, supplier engagement & negotiation, stock and inventory coordination, entrepreneurial operations, record keeping & documentation control, workflow efficiency systems, and commercial growth execution.',
            imageUrl: '-'
        },
    ]
  return (
    <section className="">
        <div className="about-hero">
            <p className="tagline">About us</p>
            <h1>A Zambian, female led enterprise built on institutional trust</h1>
            <p>Built on a legacy of integrity, resilience and service excellence evolved into a multi-service enterprise for government, private sector, NGOs, mining, education, healthcare and commercial clients</p>
        </div>

        <div className="vision">
            <div className="columns">
                <div className="text">
                    <h3>Vision</h3>
                    <p>"Built on a legacy of integrity, resilience and service excellence  evolved into a multi-service enterprise for government, private sector, NGOs, mining, education, healthcare and commercial clients"</p>
                </div>
                <div className="text">
                    <h3>Mission</h3>
                    <p>"To deliver quality products, efficient services, and measurable value through integrity-driven systems, professional execution, and sustainable partnerships."</p>
                </div>
            </div>
        </div>

        <div className="values">
            <h2>Core values</h2>

            <div className="pills">
                {coreValuesPills.map((v, i) => (
                    <div className="pill" key={i}>{v}</div>
                ))}
            </div>
        </div>

        <div className="leadership">
            <h2>leadership</h2>

            <div className="cards">
                {leadership.map(leader => (
                    <div className="card" key={leader.id}>
                        <div className="image">
                            <img src={leader.imageUrl} alt="" />
                        </div>
                        <div className="content">
                            <p className="role">{leader.role}</p>
                            <h3 className="name">{leader.name}</h3>
                            <p className="bio">{leader.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p>Zithande Limited is committed to responsible governance, and continues to strengthen its board advisory structure, compliance framework and reporting standards.</p>
        </div>

        <div className="internship">
            <h2>Youth empowerment through internship & seasonal work</h2>

            <div className="cards">
                <div className="card">
                    <p>
                        Practical opportunities for young people through internships and seasonal temporary employment reducing youth unemployment one placement at a time
                    </p>
                </div>
                <div className="card">
                    <p>
                        Internship program details  hands-on experience in procurement, administration, customer service, logistics, stock management and business operations. Seasonal roles during peak periods  deliveries, warehouse support, event logistics, packaging and promotions.
                    </p>
                </div>
            </div>
        </div>

        <div className="partnership">
            <h2>Discuss a partnership with our leadership team</h2>
            <a href="">contact zithande</a>
        </div>
    </section>
  )
}
