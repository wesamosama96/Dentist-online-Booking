import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Gallery",
      path: "/gallery"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Patient Portal",
      path: "/dashboard"
    }
  ];
  return (
    <>
      <nav className="bg-white px-4 md:px-8 lg:px-12 xl:px-20 py-5 flex items-center justify-between relative">
        <NavLink to="/" className="text-2xl text-[#1E3A8A]">
          <span className="font-bold" style={{ fontFamily: "Oldenburg" }}>
            A
          </span>
          ether<span style={{ fontFamily: "Oldenburg" }}>D</span>ental
        </NavLink>
        <div className="hidden md:flex items-center px-1 py-1 gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${item === "Products" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-[#1E3A8A] hover:border-b-2 hover:border-[#1E3A8A]" : "text-zinc-500 hover:text-[#1E3A8A] hover:border-b-2 hover:border-[#1E3A8A]"}`}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <button className="flex items-center justify-center gap-2.5 bg-[#FF7F50] text-zinc-50 text-sm font-medium px-5 py-1 rounded-full cursor-pointer border-0 w-fit hover:bg-[#f35727] transition-colors">
          Book Now
          <span className="size-7 rounded-full bg-white flex items-center justify-center">
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.6 4.602h10m-4-4 4 4-4 4"
                stroke="#3f3f47"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#3f3f47"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}
