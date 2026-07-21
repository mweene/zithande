import { MapPin, Phone, Mail, CircleStar } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact">
        <div className="hero-text text-center grid place-items-center py-16">
            <p className="tagline">Contact</p>
            <h1 className="md:w-[23ch]">Reach our procurement team directly</h1>
            <p className="md:w-[55ch] mt-4">Send your requirements and we'll respond with a quote or a call, whichever moves things faster</p>
        </div>

        <div className="contact-details grid md:grid-cols-2 p-15 bg-white">
            <div className="cell [&_p]:flex">
                <p className="address">
                    <MapPin size={20}/>
                    <span>Gizenga Road, Woodlands, Lusaka, Zambia · P.O. Box 35097, Lusaka 10101</span>
                </p>
                <p className="phone">
                    <Phone size={20}/>
                    <span>+260 977 784751 · +260 955 784751</span>
                </p>
                <p className="email">
                    <Mail size={20} />
                    <span>acwillombe@gmail.com</span>
                </p>
                <p className="compliance">
                    <CircleStar size={20}/>
                    <span>Company Reg. No. 98355 · TPIN 1002120601</span>
                </p>
            </div>

            <div className="form bg-[#c3ef6d] p-8 rounded-lg">
                <form className="grid gap-4 [&_label]:grid [&_label]:capitalize [&_input]:bg-white [&_input]:rounded-lg [&_input]:p-3">
                    <label htmlFor="name">
                        name
                        <input type="text" id="name" placeholder="enter full name"/>
                    </label>
                    <label htmlFor="organisation">
                        organisation
                        <input type="text" id="organisation" placeholder="enter your organisation"/>
                    </label>
                    <label htmlFor="phone">
                        phone
                        <input type="phone" id="phone" placeholder="enter phone number"/>
                    </label>
                    <label htmlFor="email">
                        email
                        <input type="email" id="email" placeholder="enter email"/>
                    </label>
                    <select id="questions">
                        <label>what do you need?</label>
                        <option>general supply</option>
                        <option>branding & corporate identity</option>
                        <option>food supply & catering</option>
                        <option>business support services</option>
                        <option>not sure yet</option>
                    </select>

                    <button type="submit" className="bg-[#29340b] text-white mt-4 p-4 rounded-lg">Send message</button>
                </form>
            </div>
        </div>
    </section>
  )
}
