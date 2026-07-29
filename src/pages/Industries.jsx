import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import { ChevronRight } from "lucide-react";

export default function Industries() {
    const industries = [
        "Government Ministries & Agencies",
        "Local Authorities",
        "Mining Companies",
        "Construction Firms",
        "Schools & Universities",
        "Hospitals & Clinics",
        "NGOs & Donor Agencies",
        "Banks & Financial Institutions",
        "SMEs & Corporates",
        "Retail & Hospitality Sector"
    ]
  return (
    <section className="industries-page">
        <div className="serve text-center grid place-items-center px-4 pt-16 pb-12">
            <p className="tagline">Industries we serve</p>
            <h1 className="md:w-[23ch]">Positioned across ten institutional sectors</h1>
            <p className="md:w-[55ch] mt-4">From ministries to mines, schools to SMEs our systems are built to meet each sector's own pace and compliance needs</p>
        </div>

        <div className="ten-industries-cards px-8 md:mx-15 pb-15">
            {industries.map((industry, index) => (
                <div key={index} className="card grid place-content-center border p-5 rounded-2xl">
                    <p className="text-center">
                        {industry}
                    </p>
                </div>
            ))}
        </div>

        <div className="same-discipline bg-white grid place-items-center text-center py-15">
            <h2 className="md:w-[21ch] mb-8">The same discipline, wherever you sit</h2>

            <div className="cards grid gap-4 mx-8 md:mx-80 mt-8 [&_.card]:p-10 [&_.card]:rounded-2xl [&_.card]:bg-[#c1f063]">
                <div className="card border-2">
                    <p>Whether it's a ministry tender, a mine site's PPE order, or a school's stationery contract the process is the same: understand urgency, source smartly, deliver on time</p>
                </div>
                <div className="card border-2">
                    <p>Our four divisions flex to whatever combination your sector actually needs, not a fixed package</p>
                </div>
            </div>
        </div>

        <div className="closing text-center grid place-items-center py-15 px-4">
            <h2 className="md:w-[23ch] mb-8">Don't see your sector listed? We likely still serve it</h2>

              <Link to="/contact">
                  <Button styles="w-fit font-[500] bg-[#c1f063]! flex hover:bg-[#29340b]!">
                      Ask us directly
                      <ChevronRight />
                  </Button>
              </Link>
        </div>
    </section>
  )
}
