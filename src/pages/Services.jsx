import { ChevronDown, ChevronUp } from "lucide-react";

export default function Services() {
    const divisions = [
        {id: 1, name: 'General supply', items: []},
        {id: 2, name: 'Branding & Corporate Identity', items: []},
        {id: 3, name: 'Food Supply & Catering', items: []},
        {id: 4, name: 'Business Support Services', items: []},
    ];
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
            <ul className="grid gap-2 md:w-200 [&_li]:cursor-pointer [&_li]:rounded-lg">
                {divisions.map(division => (
                    <li key={division.id} className="flex place-content-between items-center border p-6">
                        <h3 className="">{division.name}</h3>
                        <ChevronDown size={22}/>
                    </li>
                ))}
            </ul>
        </div>

        <div className="flexible md:p-15 md:py-20 my-20 bg-white text-center grid ">
            <h2>
                Flexible contracting
            </h2>

            <div className="cards mt-6 grid md:grid-cols-3 gap-4 [&_.card]:border [&_.card]:rounded-lg [&_.card]:px-10 [&_.card]:py-15">
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
            <a href="" className="bg-white">Request a quote</a>
        </div>
    </section>
  )
}
