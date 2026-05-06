
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";


const MapSection = () => {
  return (
    <div className="space-y-6 max-w-md w-full">

      {/* Map */}
      <div className="h-[250px] rounded-xl overflow-hidden shadow-sm">
        <iframe
          title="map"
          className="w-full h-full"
          src="https://www.google.com/maps?q=Cairo&output=embed"
          loading="lazy"
        />
      </div>

      <div className="bg-gray-100 p-6 w-full max-w-md rounded-lg space-y-6">

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <MapPinIcon className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-blue-900 font-semibold text-lg">Location</h3>
            <p className="text-gray-600 text-sm">
              123 Health Ave, Wellness City <br />
              Suite 400
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <PhoneIcon className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-blue-900 font-semibold text-lg">Contact</h3>
            <p className="text-gray-600 text-sm">
              (555) 123-4567 <br />
              hello@aetherdental.com
            </p>
          </div>
        </div>

        {/* Clinic Hours */}
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <ClockIcon className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-blue-900 font-semibold text-lg">
              Clinic Hours
            </h3>
            <p className="text-gray-600 text-sm">
              Mon - Thu: <span className="ml-4">8:00 AM - 6:00 PM</span><br />
              Friday: <span className="ml-9">8:00 AM - 4:00 PM</span><br />
              Sat - Sun: <span className="ml-5 text-red-500">Closed</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MapSection