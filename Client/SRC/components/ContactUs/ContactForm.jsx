

const ContactForm = () => {
  return (
   <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full">

      <h2 className="text-lg font-semibold mb-6 text-gray-800">
        Send us a message
      </h2>

      <form className="space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>

        <button
          className="w-full bg-[#ff7f6a]  text-white py-3 rounded-md"
        >
          Send Message
        </button>

      </form>
    </div>
  )
}

export default ContactForm