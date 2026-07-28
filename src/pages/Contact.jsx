import { MapPin, Phone, Mail, CircleStar, ChevronDown } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact">
        <div className="hero-text text-center grid place-items-center py-16">
            <p className="tagline">Contact</p>
            <h1 className="md:w-[20ch]">Reach our procurement team directly</h1>
            <p className="md:w-[55ch] mt-4">Send your requirements and we'll respond with a quote or a call, whichever moves things faster</p>
        </div>

        <div className="contact-details md:p-15 md:px-40 bg-white">
              <div className="grid md:grid-cols-2 border-2 rounded-3xl bg-[#c3ef6d]">
                  <div className="form bg-[#f0ffd2] p-8 rounded-2xl m-2">
                      <form className="grid gap-4 [&_label]:grid [&_input]:bg-[#cddab0] [&_input]:rounded-lg [&_input]:p-3">
                          <label htmlFor="name">
                              Name
                              <input type="text" id="name" placeholder="enter full name"/>
                          </label>
                          <label htmlFor="organisation">
                              Organisation
                              <input type="text" id="organisation" placeholder="enter your organisation"/>
                          </label>
                          <label htmlFor="phone">
                              Phone
                              <input type="tel" id="phone" placeholder="enter phone number"/>
                          </label>
                          <label htmlFor="email">
                              Email
                              <input type="email" id="email" placeholder="enter email"/>
                          </label>

                          <div className="relative">
                              <label htmlFor="questions">What do you need?</label>
                              <select
                                  id="questions"
                                  defaultValue="general-supply"
                                  className="p-4 py-3 bg-[#cddab0] rounded-xl w-full appearance-none pr-10  focus:border-[#1b2307] focus:ring-2 focus:ring-slate-200"
                              >
                                  <option value="">--Please choose an option--</option>
                                  <option value="general-supply">General supply</option>
                                  <option value="branding">Branding & Corporate identity</option>
                                  <option value="food-supply">Food supply & Catering</option>
                                  <option value="bussiness">Business support services</option>
                                  <option value="none">Not sure yet</option>
                              </select>
                              <ChevronDown
                                  className="pointer-events-none absolute mt-3 right-3 top-1/2 -translate-y-1/2 text-slate-600"
                              />
                          </div>

                          <button type="submit" className="bg-[#1b2307]! text-white mt-4 p-4 rounded-xl">
                              Send message
                          </button>
                      </form>
                  </div>

                  <div className="cell [&_div]:flex [&_div]:gap-2 [&_div]:place-items-center p-8 flex flex-col gap-4">
                      <h3>Contact details</h3>
                      <section>
                          <div className="address">
                              <MapPin size={22}/>
                              <p>Gizenga Road, Woodlands, Lusaka, Zambia · P.O. Box 35097, Lusaka 10101</p>
                          </div>
                          <div className="phone">
                              <Phone size={22}/>
                              <p>+260 977 784751</p>
                          </div>
                          <div className="phone">
                              <Phone size={22}/>
                              <p>+260 955 784751</p>
                          </div>
                          <div className="email">
                              <Mail size={22}/>
                              <p>acwillombe@gmail.com</p>
                          </div>
                          <div className="compliance">
                              <CircleStar size={22}/>
                              <p>Company Reg. No. 98355</p>
                          </div>
                      </section>
                  </div>
              </div>
        </div>
    </section>
  )
}
