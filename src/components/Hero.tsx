import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenAppointment?: () => void;
}

export default function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-16 w-full relative">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span className="text-sm text-gray-300 font-medium">Powered by Supabase Backend</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl mb-6">
        The Future of Note<br />Taking Starts with AI
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        Plan less, focus more. Your personal task workspace, reimagined for deep work.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
        <button 
          onClick={onOpenAppointment}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer active:scale-95"
        >
          <Calendar className="w-5 h-5" />
          <span>Book an Appointment</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </section>
  );
}
