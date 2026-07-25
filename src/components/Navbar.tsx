import { Hexagon } from 'lucide-react';

export default function Navbar() {
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
        <a 
          href="https://forms.gle/oHY5LR2vpT12HQb29" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Contact Me
        </a>
      </div>

      <a 
        href="https://forms.gle/oHY5LR2vpT12HQb29" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 cursor-pointer inline-block"
      >
        Contact Me
      </a>

    </nav>
  );
}
