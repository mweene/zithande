import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from "lucide-react";
import Button from "../components/Button.jsx";

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
        {id: 2, name: 'Branding and Corporate Identity', items: [
            "Branded uniforms",
            "Promotional merchandise",
            "Corporate gifts",
            "Signage Banners",
            "Vehicle branding",
            "Event branding materials"
        ]},
        {id: 3, name: 'Food Supply and Catering', items: [
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
        (id === activeDivision) ? setActiveDivision(null) : setActiveDivision(id)
    }

  return (
    <section className="services">
        <div className="four-divisions text-center grid place-items-center py-16 px-4">
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

        <div className="list grid place-content-center px-4">
            <ul className="grid gap-2 md:w-200 [&_li]:cursor-pointer [&_li]:rounded-2xl rounded-3xl border-2 p-4 bg-white">
            {divisions.map((division) => {
              const isOpen = division.id === activeDivision;

              return (
                <li
                  key={division.id}
                  onClick={() => handleActiveDivision(division.id)}
                  className=""
                >
                  {/* Header */}
                  <div className="flex place-content-between items-center p-6 bg-[#c1f063] rounded-2xl">
                    <h3 className="">{division.name}</h3>
                    {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
                  </div>

                  {/* Smooth Height Transition Wrapper */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    {/* Required overflow-hidden inner wrapper */}
                    <div className="overflow-hidden">
                      <ul className="content grid md:grid-cols-4 gap-1.5 my-8 mx-4">
                        {division.items.map((item, index) => (
                          <li
                            key={index}
                            className="border-2 text-center p-4 rounded-xl grid place-content-center hover:bg-slate-100 transition-colors cursor-default!"
                          >
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
            </ul>
        </div>

        <div className="flexible px-4 md:p-15 md:py-20 my-20 bg-white gap-8">
            <div className="">
                <h2 className="text-center">
                    Flexible contracting
                </h2>
            </div>

            <div className={`
                cards mt-6 grid md:grid-cols-3 gap-4 [&_.card]:border-2
                [&_.card]:rounded-3xl [&_.card]:p-10 [&_.card]:bg-[#c1f063]
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
            <h2 className="md:w-[23ch] mb-8">Request a quote for any of the above</h2>
            <Link to="/contact">
                <Button styles="w-fit font-[500] bg-[#c1f063]! flex hover:bg-[#29340b]!">
                    Request a quote
                    <ChevronRight />
                </Button>
            </Link>
        </div>
    </section>
  )
}
