export default function Industries() {
    const industries = [1,2,3,4,5,6,7,8,9,10];
  return (
    <section className="industries">
        <div className="serve text-center grid place-items-center pt-16 pb-12">
            <p className="tagline">Industries we serve</p>
            <h1 className="md:w-[23ch]">Positioned across ten institutional sectors</h1>
            <p className="md:w-[55ch] mt-4">From ministries to mines, schools to SMEs our systems are built to meet each sector's own pace and compliance needs</p>
        </div>

        <div className="ten-industries-cards md:mx-15 pb-15">
            {industries.map((industry, idx) => (
                <div className="card border p-5 rounded-lg" key={idx}>
                    {industry}
                </div>
            ))}
        </div>

        <div className="same-discipline bg-white grid place-items-center text-center py-15">
            <h2 className="md:w-[23ch]">The same discipline, wherever you sit</h2>

            <div className="cards grid md:grid-cols-2 gap-4 mx-20 mt-8 [&_.card]:p-10 [&_.card]:rounded-lg">
                <div className="card border">
                    <p>Whether it's a ministry tender, a mine site's PPE order, or a school's stationery contract the process is the same: understand urgency, source smartly, deliver on time</p>
                </div>
                <div className="card border">
                    <p>Our four divisions flex to whatever combination your sector actually needs — not a fixed package</p>
                </div>
            </div>
        </div>

        <div className="closing text-center grid place-items-center py-15">
            <h2 className="md:w-[23ch]">Don't see your sector listed? We likely still serve it</h2>
            <a href="" className="bg-white mt-8">Ask us directly</a>
        </div>
    </section>
  )
}
