import React, { useState } from 'react';
import { BarChart3, Globe, MapPin, TrendingUp, Award, Info, Search, Filter, X, ChevronRight, Users, CheckCircle2 } from 'lucide-react';

interface DetailedDataItem {
  name: string;
  rate: number;          // Overall Literacy %
  maleRate: number;      // Male Literacy %
  femaleRate: number;    // Female Literacy %
  youthRate: number;     // Youth Literacy (15-24) %
  flag?: string;
  rank: number;
  capital?: string;
  category: string;
}

export default function LiteracyChart() {
  const [activeTab, setActiveTab] = useState<'country' | 'state'>('country');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<DetailedDataItem | null>(null);

  // Top 10 Highest Literacy Countries Worldwide (%) with complete breakdown
  const countryData: DetailedDataItem[] = [
    { name: "Andorra", rate: 100.0, maleRate: 100.0, femaleRate: 100.0, youthRate: 100.0, flag: "🇦🇩", rank: 1, capital: "Andorra la Vella", category: "Western Europe" },
    { name: "Finland", rate: 100.0, maleRate: 100.0, femaleRate: 100.0, youthRate: 100.0, flag: "🇫🇮", rank: 2, capital: "Helsinki", category: "Northern Europe" },
    { name: "Norway", rate: 100.0, maleRate: 100.0, femaleRate: 100.0, youthRate: 100.0, flag: "🇳🇴", rank: 3, capital: "Oslo", category: "Northern Europe" },
    { name: "Luxembourg", rate: 100.0, maleRate: 100.0, femaleRate: 100.0, youthRate: 100.0, flag: "🇱🇺", rank: 4, capital: "Luxembourg City", category: "Western Europe" },
    { name: "Liechtenstein", rate: 100.0, maleRate: 100.0, femaleRate: 100.0, youthRate: 100.0, flag: "🇱🇮", rank: 5, capital: "Vaduz", category: "Central Europe" },
    { name: "Uzbekistan", rate: 99.9, maleRate: 99.9, femaleRate: 99.9, youthRate: 100.0, flag: "🇺🇿", rank: 6, capital: "Tashkent", category: "Central Asia" },
    { name: "Ukraine", rate: 99.8, maleRate: 99.8, femaleRate: 99.7, youthRate: 99.9, flag: "🇺🇦", rank: 7, capital: "Kyiv", category: "Eastern Europe" },
    { name: "Georgia", rate: 99.8, maleRate: 99.8, femaleRate: 99.8, youthRate: 99.9, flag: "🇬🇪", rank: 8, capital: "Tbilisi", category: "Eastern Europe" },
    { name: "Poland", rate: 99.8, maleRate: 99.9, femaleRate: 99.7, youthRate: 100.0, flag: "🇵🇱", rank: 9, capital: "Warsaw", category: "Central Europe" },
    { name: "Russia", rate: 99.7, maleRate: 99.7, femaleRate: 99.6, youthRate: 99.9, flag: "🇷🇺", rank: 10, capital: "Moscow", category: "Eurasia" },
  ];

  // Top 10 State-Wise Literacy Data (%) with complete breakdown
  const stateData: DetailedDataItem[] = [
    { name: "Kerala", rate: 94.0, maleRate: 96.1, femaleRate: 92.1, youthRate: 98.2, rank: 1, capital: "Thiruvananthapuram", category: "Southern Region" },
    { name: "Mizoram", rate: 91.3, maleRate: 93.3, femaleRate: 89.3, youthRate: 97.5, rank: 2, capital: "Aizawl", category: "North-Eastern Region" },
    { name: "Goa", rate: 88.7, maleRate: 92.6, femaleRate: 84.7, youthRate: 96.1, rank: 3, capital: "Panaji", category: "Western Region" },
    { name: "Tripura", rate: 87.8, maleRate: 91.5, femaleRate: 82.7, youthRate: 95.8, rank: 4, capital: "Agartala", category: "North-Eastern Region" },
    { name: "Himachal Pradesh", rate: 82.8, maleRate: 89.5, femaleRate: 75.9, youthRate: 94.2, rank: 5, capital: "Shimla", category: "Northern Region" },
    { name: "Maharashtra", rate: 82.3, maleRate: 88.4, femaleRate: 75.9, youthRate: 92.8, rank: 6, capital: "Mumbai", category: "Western Region" },
    { name: "Sikkim", rate: 81.4, maleRate: 86.6, femaleRate: 75.6, youthRate: 92.1, rank: 7, capital: "Gangtok", category: "North-Eastern Region" },
    { name: "Tamil Nadu", rate: 80.1, maleRate: 86.8, femaleRate: 73.4, youthRate: 93.5, rank: 8, capital: "Chennai", category: "Southern Region" },
    { name: "Gujarat", rate: 78.0, maleRate: 85.8, femaleRate: 69.7, youthRate: 90.4, rank: 9, capital: "Gandhinagar", category: "Western Region" },
    { name: "West Bengal", rate: 76.3, maleRate: 81.7, femaleRate: 70.5, youthRate: 89.1, rank: 10, capital: "Kolkata", category: "Eastern Region" },
  ];

  const currentDataset = activeTab === 'country' ? countryData : stateData;
  const filteredData = currentDataset.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full max-w-4xl mx-auto my-16 px-4 relative z-20">
      {/* Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse pointer-events-none"></div>

      {/* Main Card */}
      <div className="relative bg-[#0a0e17]/95 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden text-left">
        
        {/* Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>Interactive Literacy Bar Graph</span>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl">
            <button
              onClick={() => { setActiveTab('country'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'country'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Top 10 Countries
            </button>
            <button
              onClick={() => { setActiveTab('state'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'state'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Top 10 States
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          {activeTab === 'country' ? 'Official Top 10 Countries for Literacy Rate' : 'Top 10 State-Wise Literacy Rates'}
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          {activeTab === 'country'
            ? 'Official global rankings for adult literacy rates (%) certified by UNESCO and international census data.'
            : 'Official state-level literacy rankings (%) certified by national census statistics.'}
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Filter ${activeTab === 'country' ? 'country' : 'state'} by name or region...`}
            className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Bar Graph Visuals */}
        <div className="space-y-4 mb-8">
          {filteredData.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              No matching {activeTab} found for "{searchQuery}".
            </div>
          ) : (
            filteredData.map((item) => {
              const widthPercent = (item.rate / 100) * 100;
              const isTop3 = item.rank <= 3;

              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedItem(item)}
                  className="group relative bg-white/[0.02] hover:bg-white/[0.05] p-3 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
                >
                  {/* Label & Value Header */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-cyan-400 font-bold text-xs bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        #{item.rank}
                      </span>
                      {item.flag && <span className="text-base">{item.flag}</span>}
                      <span className="font-semibold text-white group-hover:text-cyan-300 text-sm transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full hidden sm:inline">
                        {item.category}
                      </span>
                      {isTop3 && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                          Top Leader
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono font-extrabold text-cyan-400 text-base">
                        {item.rate.toFixed(1)}%
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* High-Definition Animated Bar */}
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(6,182,212,0.8)] ${
                        item.rank === 1
                          ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500'
                          : item.rank <= 3
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                      }`}
                      style={{ width: `${widthPercent}%` }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Dashboard Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Top Ranked: <strong className="text-white">{currentDataset[0].name} ({currentDataset[0].rate}%)</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Benchmark: <strong className="text-white">{activeTab === 'country' ? 'World Avg 86.7%' : 'National Avg 77.7%'}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Click any bar for detailed breakdown</span>
          </div>
        </div>

      </div>

      {/* Detailed Breakdown Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setSelectedItem(null)} />

          <div className="relative w-full max-w-md bg-[#0a0e17] border border-cyan-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(6,182,212,0.3)] z-10 text-left">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              {selectedItem.flag && <span className="text-3xl">{selectedItem.flag}</span>}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Rank #{selectedItem.rank}
                  </span>
                  <span className="text-xs text-gray-400">{selectedItem.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">{selectedItem.name}</h3>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
              <div className="text-xs text-gray-400 mb-1">Overall Literacy Rate</div>
              <div className="text-3xl font-extrabold text-cyan-400">{selectedItem.rate.toFixed(1)}%</div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <div className="text-[10px] text-gray-400 mb-1">Male Rate</div>
                <div className="text-sm font-bold text-blue-400">{selectedItem.maleRate}%</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <div className="text-[10px] text-gray-400 mb-1">Female Rate</div>
                <div className="text-sm font-bold text-pink-400">{selectedItem.femaleRate}%</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <div className="text-[10px] text-gray-400 mb-1">Youth (15-24)</div>
                <div className="text-sm font-bold text-emerald-400">{selectedItem.youthRate}%</div>
              </div>
            </div>

            {selectedItem.capital && (
              <div className="text-xs text-gray-400 flex items-center justify-between border-t border-white/10 pt-3">
                <span>Capital City:</span>
                <strong className="text-white">{selectedItem.capital}</strong>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
