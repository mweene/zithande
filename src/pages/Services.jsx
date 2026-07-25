import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Services() {
    const [activeDivision, setActiveDivision] = useState(null);

    const divisions = [
        {id: 1, name: 'General supply', items: [
            "Office stationery",
            "Printer consumables",
            "Corporate furniture",
            "Cleaning materials",
            "Household supplies",
            "Protective clothing (PPE)",
            "Uniforms",
            "Electrical materials",
            "Plumbing materials",
            "Building materials",
            "IT accessories & hardware"
        ]},
        {id: 2, name: 'Branding & Corporate Identity', items: [
            "Branded uniforms",
            "Promotional merchandise",
            "Corporate gifts",
            "Signage Banners",
            "Vehicle branding",
            "Event branding materials"
        ]},
        {id: 3, name: 'Food Supply & Catering', items: [
            "Bulk groceries",
            "Institutional food supply",
            "Corporate catering",
            "Event refreshments"
        ]},
        {id: 4, name: 'Business Support Services', items: [
            "Procurement support",
            "Documentation support",
            "Customer service training",
            "Business advisory support",
            "SME systems consulting"
        ]},
    ];

    const handleActiveDivision = (id) => {
        setActiveDivision(id);
    }

  return (
    <section className="services">
        <div className="four-divisions text-center grid place-items-center py-16">
            <p className="tagline">
                Core business divisions
            </p>
            <h1 className="md:w-[23ch]">
                Four divisions, structured for institutional procurement
            </h1>
            <p className="md:w-[55ch] mt-4">
                From office stationery to full event branding, catering and business advisory every division routes through the same disciplined systems.
            </p>
        </div>

        <div className="list grid place-content-center">
            <ul className="grid gap-2 md:w-200 [&_li]:cursor-pointer [&_li]:rounded-2xl rounded-3xl border p-4 bg-white">
                {divisions.map(division => (
                    <li
                        key={division.id}
                        onClick={() => handleActiveDivision(division.id)}
                        className=""
                    >
                        <div className="flex place-content-between items-center p-6 bg-amber-200 rounded-2xl">
                            <h3 className="">{division.name}</h3>
                            {division.id === activeDivision ? <ChevronUp size={27}/> : <ChevronDown size={27}/>}
                        </div>
                        {division.id === activeDivision && (
                            <ul className="content grid md:grid-cols-4 gap-1.5 my-8 mx-4">
                                {division.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="border text-center p-4 grid place-content-center"
                                    >
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flexible md:p-15 md:py-20 my-20 bg-white grid">
            <h2 className="text-center">
                Flexible contracting
            </h2>

            <div className={`
                cards mt-6 grid md:grid-cols-3 gap-4 [&_.card]:border
                [&_.card]:rounded-3xl [&_.card]:p-10 [&_.card]:bg-[#eef7dc]
            `}>
                <div className="card">
                    <h3>One-off supply</h3>
                    <p>A single order, sourced and delivered on schedule</p>
                </div>
                <div className="card">
                    <h3>Recurring orders</h3>
                    <p>Regular replenishment for consumables and operational stock</p>
                </div>
                <div className="card">
                    <h3>Long-term contracts</h3>
                    <p>Multi-year institutional supply agreements, built for scale</p>
                </div>
            </div>
        </div>

        <div className="closing md:px-15 pb-20 text-center grid place-items-center">
            <h2 className="md:w-[23ch]">Request a quote for any of the above</h2>
              <Link to="/contact">
                  <p className="bg-white">
                      Request a quote
                  </p>
              </Link>
        </div>
    </section>
  )
}
