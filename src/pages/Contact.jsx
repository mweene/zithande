import { MapPin, Phone, Mail, CircleStar } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact">
        <div className="hero-text text-center grid place-items-center py-16">
            <p className="tagline">Contact</p>
            <h1 className="md:w-[20ch]">Reach our procurement team directly</h1>
            <p className="md:w-[55ch] mt-4">Send your requirements and we'll respond with a quote or a call, whichever moves things faster</p>
        </div>

        <div className="contact-details md:p-15 md:px-40 bg-white">
              <div className="grid md:grid-cols-2 border rounded-3xl">
                  <div className="form bg-[#c3ef6d] p-8 rounded-2xl m-2">
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

                  <div className="cell [&_p]:flex p-8 flex flex-col gap-4">
                      <p className="address">
                          <MapPin />
                          <p>Gizenga Road, Woodlands, Lusaka, Zambia · P.O. Box 35097, Lusaka 10101</p>
                      </p>
                      <p className="phone">
                          <Phone />
                          <p>+260 977 784751</p>
                      </p>
                      <p className="phone">
                          <Phone />
                          <p>+260 955 784751</p>
                      </p>
                      <p className="email">
                          <Mail />
                          <p>acwillombe@gmail.com</p>
                      </p>
                      <p className="compliance">
                          <CircleStar />
                          <p>Company Reg. No. 98355</p>
                      </p>
                  </div>
              </div>
        </div>
    </section>
  )
}
