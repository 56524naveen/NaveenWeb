export default function AppPreview() {
  return (
    <section className="w-full max-w-[1000px] mt-8 mb-20 relative z-10 perspective-1000">
      <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10 rounded-full scale-90 translate-y-10"></div>
      
      <div className="rounded-2xl border border-white/10 bg-[#0a0e17] shadow-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] relative">
        {/* Browser Mockup Top Bar */}
        <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0d121c]">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
           </div>
        </div>

        {/* Dashboard Mockup Image */}
        <div className="aspect-[16/10] w-full bg-[#0a0e17] flex items-center justify-center overflow-hidden">
            <img 
              src="https://placehold.co/1000x625/111827/1f2937?text=Dashboard+Preview" 
              alt="Dashboard Preview"
              className="w-full h-full object-cover opacity-80"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 18, 28, 1) 0%, rgba(10, 14, 23, 1) 100%)'
              }}
            />
             {/* Note: In a real implementation, we would build out the complex dashboard UI here, 
                 but for this layout recreation based on the reference, a placeholder that mimics the dark UI shape is used to maintain structural fidelity while focusing on the landing page layout. */}
             <div className="absolute inset-0 flex flex-col pt-10 px-8 pb-8">
                {/* Simulated Dashboard Layout */}
                <div className="flex flex-1 gap-6">
                    {/* Sidebar */}
                    <div className="w-48 border-r border-white/5 pr-4 flex flex-col gap-4 hidden sm:flex">
                         <div className="h-6 w-24 bg-white/10 rounded"></div>
                         <div className="flex flex-col gap-3 mt-4">
                            <div className="h-4 w-full bg-white/5 rounded"></div>
                            <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                            <div className="h-4 w-5/6 bg-white/5 rounded"></div>
                            <div className="h-4 w-4/5 bg-white/5 rounded"></div>
                         </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Top Stats */}
                        <div className="grid grid-cols-3 gap-4 h-24">
                            <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                                <div className="h-3 w-16 bg-white/10 rounded"></div>
                                <div className="h-8 w-12 bg-white/20 rounded"></div>
                            </div>
                            <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                                <div className="h-3 w-16 bg-white/10 rounded"></div>
                                <div className="h-8 w-12 bg-white/20 rounded"></div>
                            </div>
                            <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                                <div className="h-3 w-16 bg-white/10 rounded"></div>
                                <div className="h-8 w-12 bg-white/20 rounded"></div>
                            </div>
                        </div>
                        {/* Charts Area */}
                        <div className="flex gap-4 flex-1">
                             <div className="flex-[2] bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col">
                                 <div className="h-4 w-32 bg-white/10 rounded mb-6"></div>
                                 <div className="flex-1 flex items-end gap-3 justify-center pb-4">
                                      <div className="w-8 h-[30%] bg-blue-500/50 rounded-t-sm"></div>
                                      <div className="w-8 h-[60%] bg-blue-400 rounded-t-sm"></div>
                                      <div className="w-8 h-[40%] bg-blue-500/50 rounded-t-sm"></div>
                                      <div className="w-8 h-[20%] bg-blue-500/50 rounded-t-sm"></div>
                                 </div>
                             </div>
                             <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col gap-4">
                                  <div className="h-4 w-24 bg-white/10 rounded mb-2"></div>
                                  <div className="h-3 w-full bg-white/5 rounded"></div>
                                  <div className="h-3 w-full bg-white/5 rounded"></div>
                                  <div className="h-3 w-5/6 bg-white/5 rounded"></div>
                                  <div className="h-3 w-full bg-white/5 rounded"></div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        
        {/* Bottom Fade Overlay for stylistic effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e17] to-transparent"></div>
      </div>
    </section>
  );
}
