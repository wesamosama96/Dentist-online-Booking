import { FaStar } from "react-icons/fa";
import patientImg from "../../assets/male-doctor-wearing-surgical-mask-and-scrubs-free-png.png";
export default function Testimonial() {
  return (
    <>
      <div className="container-fluid flex items-center justify-center gap-5 w-full py-10 bg-[#1e3b8a13]">
        <div className="bg-white flex items-center justify-around w-[60%] max-w-3xl rounded-2xl shadow-md px-10 mt-10">
          <div className="w-[30%] bg-[#20521c48] rounded-full overflow-clip">
            <img
              src={patientImg}
              alt="Patient"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-4 text-start max-w-2xl mt-20 mb-16">
                <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} size={20} color="#FACC15" />
                    ))}
                </div>
                <p className="max-w-[30ch] text-2xl font-medium text-[#00236F] italic" style={{fontFamily: "Newsreader, serif"}}>
                "Aether Dental completely changed my perspective on dentistry. The
                facility feels like a high-end spa, and the clinical care was the
                most thorough I've ever experienced."
                </p>
                <div className="mt-5">
                    <h3 className="text-sm  text-[#00236F]">John D.</h3>
                    <p className="text-xs text-[#44465186]">Patient since 2022</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
