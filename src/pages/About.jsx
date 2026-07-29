import Button from "../components/Button";
import { Link } from "react-router-dom";
import {
    UserCheck,
    Award,
    Brain,
    GaugeCircle,
    Users,
    Lightbulb,
    Repeat,
    HeartHandshake,
    ShieldCheck,
    ChevronRight
} from "lucide-react";

export default function About() {
    const coreValuesPills = [
        {id: 1, name: 'Integrity', icon: <ShieldCheck />},
        {id: 2, name: 'Accountability', icon: <UserCheck />},
        {id: 3, name: 'Professionalism', icon: <Award />},
        {id: 4, name: 'Respect', icon: <HeartHandshake />},
        {id: 5, name: 'Growth Mindset', icon: <Brain />},
        {id: 6, name: 'Speed & Efficiency', icon: <GaugeCircle />},
        {id: 7, name:  'Innovation', icon: <Lightbulb />},
        {id: 8, name: 'Client Focus', icon: <Users/>},
        {id: 9, name: 'Consistency', icon: <Repeat />},
    ];//8
    const leadership = [
        {
            id: 1,
            role: 'Creative Lead',
            name: 'Astrida Chomba Willombe',
            bio: 'Accomplished business professional with experience in banking, relationship management, risk management, consulting and enterprise development. Background spans wholesale trade, manufacturing, pharmaceuticals, agriculture, communications and technology. Provides strategic leadership, financial discipline and client-centred direction.',
            imageUrl: '-'
        },
        {
            id: 2,
            role: 'Chief Operating Officer',
            name: 'Kochiwe Jere',
            bio: 'Results-oriented operations executive with strong experience in purchasing and procurement systems, supplier engagement and negotiation, stock and inventory coordination, entrepreneurial operations, record keeping and documentation control, workflow efficiency systems, and commercial growth execution.',
            imageUrl: '-'
        },
    ]
  return (
    <section className="about-page text-center">
        <div className="about-hero grid place-items-center px-4 py-16 ">
            <p className="tagline">About us</p>
            <h1 className="md:w-[23ch]">A Zambian, women-led enterprise built on trust</h1>
            <p className="md:w-[55ch] mt-4">Built on a legacy of integrity, resilience and service excellence evolved into a multi-service enterprise for government, private sector, NGOs, mining, education, healthcare and commercial clients</p>
        </div>

        <div className="vision md:flex gap-8 mt-15 bg-white p-4 md:p-20 md:px-28">
            <h2>Our Vision & Mission</h2>
            <div className="columns text-left [&_.text]:p-8 [&_.text]:rounded-xl grid gap-4 [&_span]:font-black md:[&_.text]:w-160">
                <div className="text bg-[#c1f063] border-2">
                    <h3 className="mb-2">Vision</h3>
                    <p className="italic"><span>"</span>Built on a legacy of integrity, resilience and service excellence  evolved into a multi-service enterprise for government, private sector, NGOs, mining, education, healthcare and commercial clients.<span>"</span></p>
                </div>
                <div className="text bg-[#c1f063] border-2">
                    <h3 className="mb-2">Mission</h3>
                    <p className="italic"><span>"</span>To deliver quality products, efficient services, and measurable value through integrity-driven systems, professional execution, and sustainable partnerships.<span>"</span></p>
                </div>
            </div>
        </div>

        <div className="values pb-15 mt-20 grid place-content-center place-items-center">
            <h2>Our Core values</h2>

            <div className={`
                pills gap-3 place-content-center place-items-center mt-8 md:w-160
                [&_.pill]:odd:bg-[#c1f063] [&_.pill]:even:bg-white
            `}>
                {coreValuesPills.map(pill => (
                    <div
                        key={pill.id}
                        className="pill border-2 rounded-full py-4 w-full flex gap-2 place-items-center place-content-center"
                    >
                        {pill.icon}
                        {pill.name}
                    </div>
                ))}
            </div>
        </div>

        <div className="leadership grid place-items-center bg-white py-20 px-4">
            <h2>Our Leadership</h2>
            <p className="md:w-[55ch] mt-4">Zithande Limited is committed to responsible governance, and continues to strengthen its board advisory structure, compliance framework and reporting standards.</p>

              <div className="cards mt-8 mx-15 grid gap-8 md:w-4xl">
                {leadership.map(leader => (
                    <div key={leader.id} className="card border border-[#e2e4df] grid rounded-2xl md:h-100 bg-[#f2f3f1]">
                        <div className="image bg-white m-2 rounded-xl">
                        </div>
                        <div className="content px-4 py-8 grid">
                            <p className="bio">{leader.bio}</p>

                            <div className="self-end">
                                <p className="role mt-4">{leader.role}</p>
                                <h3 className="name">{leader.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="internship grid place-items-center p-4 md:p-15 md:pt-20">
            <h2 className="md:w-[23ch]">Youth empowerment through internship & seasonal work</h2>

            <div className="cards grid gap-4 mt-8 text-left [&_.card]:border-2 [&_.card]:bg-[#c1f063] [&_.card]:rounded-2xl md:mx-60">
                <div className="card">
                    <p className="p-8">
                        Practical opportunities for young people through internships and seasonal temporary employment reducing youth unemployment one placement at a time.
                    </p>
                </div>
                <div className="card">
                    <p className="p-8">
                        Internship program details  hands-on experience in procurement, administration, customer service, logistics, stock management and business operations. Seasonal roles during peak periods  deliveries, warehouse support, event logistics, packaging and promotions.
                    </p>
                </div>
            </div>
        </div>

        <div className="partnership bg-white grid place-content-center place-items-center py-16">
            <h2 className="md:w-[23ch] mb-8 px-4">Discuss a partnership with our leadership team</h2>
              <Link to="/contact">
                <Button styles="w-fit font-[500] bg-[#c1f063]! flex hover:bg-[#29340b]!">
                    Contact Zithande
                    <ChevronRight />
                </Button>
            </Link>
        </div>
    </section>
  )
}
