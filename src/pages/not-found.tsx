import { AlertCircle } from "lucide-react";
import logo_sec from '../assets/Proxima_Cloud_3.png'

export default function NotFound() {
  return (
    <div className="mb-4 gap-2 h-180">
      <img src={logo_sec} alt="proxima cloud logo" className="h-20 w-auto mr-4 opacity-90" />
      <div className="flex justify-center">
        <AlertCircle className="h-8 w-8 text-red-500" />
        <h1 className="text-2xl font-bold text-gray-800">404 Page Not Found</h1>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed my-8">
        Looks like we landed on the incorrect address... Try selecting from bottom navbar
      </p>
    </div>
  );
}
