export default function Insurance() {
    const insuranceProviders = ['HEALTHCORP', 'MEDICARE', 'Atena', 'Blue cross'];
  return (
    <>
        <div className="container-fluid flex flex-col items-center justify-center gap-5 w-full my-[3rem]">
            <p className=" uppercase text-[#757682] text-sm">Trusted by Insurance Providers & Health Networks</p>
            <ul className="list-none flex gap-10 mt-5 ">
                {insuranceProviders.map((provider, index) => (
                    <li key={index} className="uppercase text-[#191C1E] text-3xl font-semibold opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer"  style={{fontFamily: "Newsreader, sans-serif"}}>{provider}</li>
                ))}
            </ul>
        </div>
    </>
  )
}
