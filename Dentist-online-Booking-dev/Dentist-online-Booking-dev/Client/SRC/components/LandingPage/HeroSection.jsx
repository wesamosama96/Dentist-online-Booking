import heroImg from "../../assets/HeroSection.png"
import heroImg2 from "../../assets/ProfessionalDentist.png"
export default function HeroSection() {
  return (
    <>
      <div className="container-fluid flex items-center justify-around px-5 w-full h-screen" style={{backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="container flex flex-col gap-2 mx-12 w-fit">
            <span className="bg-[#62FAE3] text-[#007165] px-4 py-1 rounded-full w-fit">Excellence in Dental Care</span>
            <h2 className="text-[3rem] text-[#00236F] max-w-[10ch] font-semibold" style={{fontFamily: "Newsreader, sans-serif" }}>Your Smile, <span style={{fontFamily: "Newsreader, sans-serif", color: "#006B5F", fontStyle:"italic" }}>Our Passion</span></h2>
            <p className="text-[#444651] max-w-[42ch]">Experience premium dental care in a comfortable environment designed for your peace of mind. We combine advanced technology with a compassionate touch.</p>
        <div className="flex gap-10">
            <button className="bg-[#FF7F50] p-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 my-[2.5rem] w-[50%] hover:bg-[#e95022] transition-colors duration-200 cursor-pointer" style={{boxShadow: "0 20px 25px -5px #FF7F5066, 0 10px 10px -5px #FF7F5033"}}>
                Book your appointment   
            </button>
            <button className="bg-transparent border-2 border-[#00236F] text-[#00236F] p-4 rounded-xl font-bold flex items-center justify-center gap-2 my-[2.5rem] w-[45%] hover:bg-[#00236F] hover:text-white transition-colors duration-200 cursor-pointer">
                View our services
            </button>   
        </div>
        </div>
        <img src={heroImg2} alt="Professional Dentist" className="object-contain my-10 mx-4" />
      </div>
    </>
  )
}