import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactMap from "../../components/contact/ContactMap";
import ContactPartners from "../../components/contact/ContactPartners";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <div className="container py-5">

      <ContactHero />

      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <ContactForm />
        </div>

        <div className="col-md-6">
          <ContactMap />
        </div>
      </div>

      {/* LAST SECTION */}
      <ContactPartners />

    </div>
  );
}
