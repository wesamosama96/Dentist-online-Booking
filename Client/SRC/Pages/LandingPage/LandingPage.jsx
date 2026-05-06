import CTABanner from "../../components/LandingPage/CTABanner";
import HeroSection from "../../components/LandingPage/HeroSection";
import Insurance from "../../components/LandingPage/Insurance";
import Standards from "../../components/LandingPage/Standards";
import Testimonial from "../../components/LandingPage/Testimonial";

export default function LandingPage() {
  return (
    <>
    <div className="container-fluid">
      <HeroSection />
      <Insurance />
      <Standards />
      <Testimonial />
      <CTABanner />
    </div>
    </>
  )
}
