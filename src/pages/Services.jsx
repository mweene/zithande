import { ChevronDown, ChevronUp } from "lucide-react";

export default function Services() {
    const divisions = [
        {id: 1, name: 'General supply', items: []},
        {id: 2, name: 'Branding & Corporate Identity', items: []},
        {id: 3, name: 'Food Supply & Catering', items: []},
        {id: 4, name: 'Business Support Services', items: []},
    ];
  return (
    <section className="">
        <div className="four-divisions">
            <p className="tagline">
                Core business divisions
            </p>
            <h2 className="">
                Four divisions, structured for institutional procurement
            </h2>
            <p>
                From office stationery to full event branding, catering and business advisory every division routes through the same disciplined systems.
            </p>
        </div>

        <div className="list">
            <ul>
                {divisions.map(division => (
                    <li key={division.id}>
                        {division.name}
                        <ChevronDown size={20}/>
                    </li>
                ))}
            </ul>
        </div>

        <div className="flexible">
            <h2>
                Flexible contracting
            </h2>

            <div className="cards">
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

        <div className="closing">
            <h2>Request a quote for any of the above</h2>
            <a href="">Request a quote</a>
        </div>
    </section>
  )
}
