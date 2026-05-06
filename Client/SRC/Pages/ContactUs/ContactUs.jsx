import HeroSection from "../../components/ContactUs/HeroSection";
import ContactForm from "../../components/ContactUs/ContactForm";
import MapSection from "../../components/ContactUs/MapSection";
import Insurance from "../../components/ContactUs/Insurance";
const ContactUs = () => {
  return (
    
    <section className="max-w-6xl mx-auto px-4 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Hero */}
        <div className="md:col-span-2">
          <HeroSection />
        </div>

        {/* Left */}
        <div className="flex justify-start">
          <ContactForm />
        </div>

        {/* Right */}
        <div className="flex justify-end">
          <MapSection />
        </div>

      </div>

<div><Insurance/></div>
    </section>
  );
};

export default ContactUs;