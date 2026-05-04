import { FaAngleRight } from "react-icons/fa";

export default function ContentCard({ icon, title, description, link }) {
  return (
    <>
      <div className="flex flex-col justify-between gap-2 bg-white p-8 rounded-lg shadow-md max-w-120 hover:transform hover:-translate-y-3 transition-transform duration-300">
        <div className="bg-[#62fae362] p-5 rounded-md w-fit flex items-center justify-center">{icon}</div>
        <h3 className="text-3xl font-normal text-[#00236F] my-5 ">{title}</h3>
        <p className="text-gray-600 max-w-[30ch] mb-4">{description}</p>
        <a
          href={link}
          className="text-[#006B5F] hover:text-[#FF7F50] font-medium w-fit transition-colors"
        >
          Learn More <FaAngleRight className="inline-block ml-2" />
        </a>
      </div>
    </>
  );
}
    