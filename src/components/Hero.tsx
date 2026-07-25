import { Sparkles, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-16 w-full relative">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm">
        <Sparkles className="w-4 h-4 text-gray-300" />
        <span className="text-sm text-gray-300 font-medium">Take note using AI</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl mb-6">
        The Future of Note<br />Taking Starts with AI
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
        Plan less, focus more. Your personal task workspace, reimagined for deep work.
      </p>

      <form className="flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 pl-5 w-full max-w-md backdrop-blur-sm shadow-xl focus-within:border-white/30 transition-colors">
        <Mail className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
        <input 
          type="email" 
          placeholder="Your Email Address" 
          className="bg-transparent border-none text-white outline-none flex-1 w-full placeholder:text-gray-500 text-sm"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 shrink-0 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
