import { Hexagon, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenLogin?: () => void;
  onOpenAppointment?: () => void;
}

export default function Navbar({ onOpenLogin, onOpenAppointment }: NavbarProps) {
  return (
    <nav className="w-full pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Hexagon className="w-7 h-7 text-white fill-white" />
        <span className="text-white font-semibold text-xl tracking-wide">Naveen Web</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-md shadow-sm">
        <a href="#" className="text-sm text-white font-medium">Home</a>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Feature</a>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a>
        <button 
          onClick={onOpenAppointment}
          className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
        >
          Book Appointment
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onOpenAppointment}
          className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
        <button 
          onClick={onOpenLogin}
          className="border border-white/20 hover:bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer active:scale-95"
        >
          Log in
        </button>
      </div>
    </nav>
  );
}

