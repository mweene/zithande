export default function Contact() {
  return (
    <section className="contact">
        <div className="hero-text">
            <p className="tagline">Contact</p>
            <h2>Reach our procurement team directly</h2>
            <p>Send your requirements and we'll respond with a quote or a call, whichever moves things faster</p>
        </div>

        <div className="contact-details">
            <div className="cell">
                <p className="address">
                    <span>address</span>
                    <span>Gizenga Road, Woodlands, Lusaka, Zambia · P.O. Box 35097, Lusaka 10101</span>
                </p>
                <p className="phone">
                    <span>phone</span>
                    <span>+260 977 784751 · +260 955 784751</span>
                </p>
                <p className="email">
                    <span>email</span>
                    <span>acwillombe@gmail.com</span>
                </p>
                <p className="compliance">
                    <span>compliance line</span>
                    <span>Company Reg. No. 98355 · TPIN 1002120601</span>
                </p>
            </div>

            <div className="form">
                <form>
                    <label htmlFor="name">
                        name:
                        <input type="text" id="name" placeholder="enter full name"/>
                    </label>
                    <label htmlFor="organisation">
                        organisation:
                        <input type="text" id="organisation" placeholder="enter your organisation"/>
                    </label>
                    <label htmlFor="phone">
                        phone:
                        <input type="phone" id="phone" placeholder="enter phone number"/>
                    </label>
                    <label htmlFor="email">
                        email:
                        <input type="email" id="email" placeholder="enter email"/>
                    </label>
                    <select id="questions">
                        what do you need?
                        <option>general supply</option>
                        <option>branding & corporate identity</option>
                        <option>food supply & catering</option>
                        <option>business support services</option>
                        <option>not sure yet</option>
                    </select>
                    <button type="submit">send message</button>
                </form>
            </div>
        </div>
    </section>
  )
}
