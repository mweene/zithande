export default function Industries() {
    const industries = [1,2,3,4,5,6,7,8,9,10];
  return (
    <section className="Industries">
        <div className="serve">
            <p className="tagline">Industries we serve</p>
            <h2>Positioned across ten institutional sectors</h2>
            <p>From ministries to mines, schools to SMEs our systems are built to meet each sector's own pace and compliance needs</p>
        </div>

        <div className="cards">
            {industries.map((industry, idx) => (
                <div className="card" key={idx}>
                    {industry}
                </div>
            ))}
        </div>

        <div className="same-discipline">
            <h2>The same discipline, wherever you sit</h2>

            <div className="cards">
                <div className="card">
                    <p>Whether it's a ministry tender, a mine site's PPE order, or a school's stationery contract the process is the same: understand urgency, source smartly, deliver on time</p>
                </div>
                <div className="card">
                    <p>Our four divisions flex to whatever combination your sector actually needs — not a fixed package</p>
                </div>
            </div>
        </div>

        <div className="closing">
            <h2>Don't see your sector listed? We likely still serve it</h2>
            <a href="">Ask us directly</a>
        </div>
    </section>
  )
}
