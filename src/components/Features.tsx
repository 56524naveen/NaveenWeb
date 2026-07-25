import { Sparkles } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full pt-20 pb-32 flex flex-col items-center">
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm shadow-sm">
        <Sparkles className="w-4 h-4 text-gray-300" />
        <span className="text-sm text-gray-300 font-medium">Key feature</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-center max-w-2xl mb-16">
        Do less planning.<br />Get more done.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Feature 1: Prompt to Task */}
        <div className="bg-[#0a0e17] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative group">
           <h3 className="text-xl font-semibold text-white mb-3">Prompt to Task</h3>
           <p className="text-gray-400 text-sm mb-10 max-w-sm">Type your thoughts. We&apos;ll turn them into tasks - instantly and intuitively.</p>
           
           <div className="w-full h-48 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl border border-white/5 mt-auto relative flex items-end justify-center p-4">
              {/* Abstract Chart/UI visual for feature 1 */}
              <div className="flex items-end gap-2 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-16 bg-blue-600 rounded-t-sm"></div>
                  <div className="w-6 h-24 bg-blue-500 rounded-t-sm"></div>
                  <div className="w-6 h-12 bg-blue-400 rounded-t-sm"></div>
                  <div className="w-6 h-28 bg-indigo-500 rounded-t-sm"></div>
              </div>
              <div className="absolute top-4 left-4 right-4 h-12 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm flex items-center px-4">
                  <div className="w-full h-2 bg-white/20 rounded-full"></div>
              </div>
           </div>
        </div>

        {/* Feature 2: AI-Powered Content Generation */}
        <div className="bg-[#0a0e17] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative group">
           <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Content Generation</h3>
           <p className="text-gray-400 text-sm mb-10 max-w-sm">Your tasks, sorted smartly by urgency, priority, or theme without lifting a finger.</p>
           
           <div className="w-full h-48 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl border border-white/5 mt-auto relative overflow-hidden">
               {/* Abstract UI visual for feature 2 */}
               <div className="absolute inset-x-8 bottom-[-20px] h-40 bg-[#111827] rounded-xl border border-white/10 p-4 transform rotate-[-2deg] opacity-90 group-hover:rotate-0 transition-transform duration-500">
                   <div className="flex items-center gap-2 mb-4">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="flex gap-2">
                       <div className="w-16 h-6 rounded-full bg-blue-600/30 text-[10px] text-blue-400 flex items-center justify-center border border-blue-500/30">Start</div>
                       <div className="w-16 h-6 rounded-full bg-white/5 text-[10px] text-gray-400 flex items-center justify-center border border-white/5">Doing</div>
                   </div>
                   <div className="mt-6 flex flex-col gap-3">
                       <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                       <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                   </div>
               </div>
           </div>
        </div>
        
        {/* Feature 3: Naveen Web Focus Mode */}
        <div className="bg-[#0a0e17] border border-white/5 rounded-3xl p-8 flex flex-col items-start overflow-hidden relative group">
           <h3 className="text-xl font-semibold text-white mb-3">Naveen Web Focus Mode</h3>
           <p className="text-gray-400 text-sm mb-10 max-w-xs">Stay in flow. One task at a time. No noise, no overload.</p>
           
           <div className="w-full h-48 mt-auto relative overflow-hidden flex items-center justify-center">
               <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/10 scale-50 group-hover:scale-75 transition-transform duration-700 ease-out"></div>
               <div className="absolute w-[200px] h-[200px] rounded-full border border-blue-500/20 scale-50 group-hover:scale-90 transition-transform duration-700 ease-out delay-75"></div>
               <div className="absolute w-[100px] h-[100px] rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 blur-[2px] shadow-[0_0_30px_rgba(37,99,235,0.5)]"></div>
           </div>
        </div>

        {/* Feature 4: AI-Powered Content Generation (Alternate) */}
        <div className="bg-[#0a0e17] border border-white/5 rounded-3xl p-8 flex flex-col items-start overflow-hidden relative group">
           <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Content Generation</h3>
           <p className="text-gray-400 text-sm mb-10 max-w-xs">Overcome writer&apos;s block and get fresh ideas with a single click.</p>
           
           <div className="w-full h-48 mt-auto relative overflow-hidden flex items-end justify-end">
               <div className="absolute bottom-4 right-4 w-64 h-32 bg-[#111827] rounded-xl border border-white/10 p-4 shadow-xl translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">A</div>
                        <div className="flex flex-col gap-1">
                            <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                            <div className="w-12 h-2 bg-white/10 rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-10 w-full rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center px-3 gap-2">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <div className="h-1.5 w-32 bg-blue-400/50 rounded-full"></div>
                    </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
