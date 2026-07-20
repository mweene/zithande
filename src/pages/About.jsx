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
    <section className="about-page text-center py-16">
        <div className="about-hero grid place-items-center">
            <p className="tagline">About us</p>
            <h1 className="md:w-[23ch]">A Zambian, women-led enterprise built on trust</h1>
            <p className="md:w-[55ch] mt-4">Built on a legacy of integrity, resilience and service excellence evolved into a multi-service enterprise for government, private sector, NGOs, mining, education, healthcare and commercial clients</p>
        </div>

        <div className="vision flex gap-8 mt-20 bg-white md:p-15 ">
            <h2>Our Vision & Mission</h2>
            <div className="columns text-left [&_.text]:border [&_.text]:p-8 [&_.text]:rounded-xl grid gap-4">
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

        <div className="values pb-15 mt-20">
            <h2>Core values</h2>

            <div className="pills flex gap-2 place-content-center mt-8">
                {coreValuesPills.map((v, i) => (
                    <div className="pill border rounded-full p-4 px-10" key={i}>{v}</div>
                ))}
            </div>
        </div>

        <div className="leadership grid place-items-center bg-white py-20">
            <h2>Leadership</h2>
            <p className="md:w-[55ch] mt-4">Zithande Limited is committed to responsible governance, and continues to strengthen its board advisory structure, compliance framework and reporting standards.</p>

            <div className="cards mt-8 mx-15 grid gap-4">
                {leadership.map(leader => (
                    <div className="card border grid gap-4 rounded-xl h-96" key={leader.id}>
                        <div className="image bg-amber-200 m-2 rounded-lg">
                            <img src={leader.imageUrl} alt="leader image" />
                        </div>
                        <div className="content">
                            <p className="role">{leader.role}</p>
                            <h3 className="name">{leader.name}</h3>
                            <p className="bio">{leader.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="internship grid place-items-center md:px-15">
            <h2 className="md:w-[23ch]">Youth empowerment through internship & seasonal work</h2>

            <div className="cards grid grid-cols-2">
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

        <div className="partnership bg-white">
            <h2>Discuss a partnership with our leadership team</h2>
            <a href="">contact zithande</a>
        </div>
    </section>
  )
}
