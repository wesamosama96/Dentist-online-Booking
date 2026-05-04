export default function CTABanner() {
  return (
    <>
        <div className="container-fluid flex items-center justify-center gap-5 w-full py-15 bg-[#ffffff13]">
            <div className="bg-[#00236F] flex flex-col items-center justify-around text-center gap-10 w-[75%] rounded-3xl shadow-md my-10 px-10 py-10">
                <h2 className="text-5xl font-medium text-white max-w-[20ch] mt-10" style={{fontFamily: "Newsreader, serif"}}>Start Your Journey To A Healthier Smile Today</h2>
                <p className="text-[#DCE1FF] text-md font-light max-w-[60ch]">Schedule your comprehensive consultation with our clinical experts and discover the Aether difference.</p>
                <button className="flex items-center justify-center gap-2.5 bg-[#FF7F50] text-zinc-50 text-xl font-light px-7 py-5 rounded-xl cursor-pointer border-0 w-fit hover:bg-[#f35727] transition-colors">
                    Book Your Consultaion
                </button>
            </div>
        </div>
    </>
  )
}
