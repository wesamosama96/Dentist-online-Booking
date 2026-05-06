import { FaGlobeAmericas } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const footerItems = [
  "Privacy Policy",
  "Terms of Services",
  "Patient Rights",
  "Careers",
];
export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-white w-full flex border-t border-gray-200 items-center justify-evenly py-30">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold text-[#1E3A8A]"><span style={{fontFamily: "Oldenburg, serif"}}>A</span>ether<span style={{fontFamily: "Oldenburg, serif", fontWeight: "400"}} >D</span>ental</h3>
          <p className="text-xs text-[#64748B] max-w-[35ch]">
            © 2024 Aether Dental Clinic. Clinical Excellence & Compassionate
            Care.
          </p>
        </div>
        <div className="hidden md:flex items-center px-1 py-1 gap-10">
          {footerItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm transition-colors ${item === "Products" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-[#1E3A8A] hover:border-b-2 hover:border-[#1E3A8A]" : "text-zinc-500 hover:text-[#1E3A8A] hover:border-b-2 hover:border-[#1E3A8A]"}`}
            >
              {item}
            </a>
          ))}
        </div>
        <div>
            <ul className="flex gap-3">
                <a href="#"><li className="border-2 border-[#8b8b8b3f] rounded-full p-2 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-200"><FaGlobeAmericas size={20}/></li></a>
                <a href="#"><li className="border-2 border-[#8b8b8b3f] rounded-full p-2 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-200"><CiShare2 size={20} /></li></a>
            </ul>
        </div>
      </div>
    </>
  );
}
