import React, { useState } from 'react';
import { BarChart3, Globe, MapPin, TrendingUp, Award, Info } from 'lucide-react';

interface DataItem {
  name: string;
  rate: number; // Percentage 0 - 100
  flag?: string;
  rank: number;
}

export default function LiteracyChart() {
  const [activeTab, setActiveTab] = useState<'country' | 'state'>('country');

  // Country-wise Literacy Data (%)
  const countryData: DataItem[] = [
    { name: "Russia", rate: 99.7, flag: "🇷🇺", rank: 1 },
    { name: "Japan", rate: 99.0, flag: "🇯🇵", rank: 2 },
    { name: "United States", rate: 99.0, flag: "🇺🇸", rank: 3 },
    { name: "China", rate: 96.8, flag: "🇨🇳", rank: 4 },
    { name: "South Africa", rate: 95.0, flag: "🇿🇦", rank: 5 },
    { name: "Brazil", rate: 93.2, flag: "🇧🇷", rank: 6 },
    { name: "World Average", rate: 86.7, flag: "🌐", rank: 7 },
    { name: "Indonesia", rate: 96.0, flag: "🇮🇩", rank: 8 },
    { name: "India", rate: 77.7, flag: "🇮🇳", rank: 9 },
    { name: "Egypt", rate: 71.2, flag: "🇪🇬", rank: 10 },
  ].sort((a, b) => b.rate - a.rate);

  // State-wise Literacy Data (India %)
  const stateData: DataItem[] = [
    { name: "Kerala", rate: 94.0, rank: 1 },
    { name: "Mizoram", rate: 91.3, rank: 2 },
    { name: "Goa", rate: 88.7, rank: 3 },
    { name: "Himachal Pradesh", rate: 82.8, rank: 4 },
    { name: "Maharashtra", rate: 82.3, rank: 5 },
    { name: "Tamil Nadu", rate: 80.1, rank: 6 },
    { name: "Gujarat", rate: 78.0, rank: 7 },
    { name: "West Bengal", rate: 76.3, rank: 8 },
    { name: "Uttar Pradesh", rate: 67.7, rank: 9 },
    { name: "Bihar", rate: 61.8, rank: 10 },
  ].sort((a, b) => b.rate - a.rate);

  const currentData = activeTab === 'country' ? countryData : stateData;
  const maxRate = 100;

  return (
    <section className="w-full max-w-4xl mx-auto my-16 px-4 relative z-20">
      {/* Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse pointer-events-none"></div>

      {/* Main Card */}
      <div className="relative bg-[#0a0e17]/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden text-left">
        
        {/* Header Badge & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>Literacy Analytics Dashboard</span>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('country')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'country'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Country-Wise
            </button>
            <button
              onClick={() => setActiveTab('state')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'state'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              State-Wise
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          {activeTab === 'country' ? 'Global Literacy Rates' : 'State-Wise Literacy Rates'}
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Interactive bar graph visualizer showing literacy percentages across {activeTab === 'country' ? 'countries worldwide' : 'major states'}.
        </p>

        {/* Bar Graph Section */}
        <div className="space-y-4 mb-8">
          {currentData.map((item, index) => {
            const widthPercent = (item.rate / maxRate) * 100;
            const isTop3 = index < 3;

            return (
              <div key={item.name} className="group relative">
                {/* Info row above bar */}
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-gray-500 text-[11px] w-5">#{index + 1}</span>
                    {item.flag && <span className="text-sm">{item.flag}</span>}
                    <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </span>
                    {isTop3 && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                        Top Performer
                      </span>
                    )}
                  </div>
                  <span className="font-mono font-bold text-cyan-400 text-sm">
                    {item.rate.toFixed(1)}%
                  </span>
                </div>

                {/* Bar Track & Fill */}
                <div className="h-3.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(6,182,212,0.6)] ${
                      index === 0
                        ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500'
                        : index < 3
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                        : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'
                    }`}
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytics Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Highest: <strong className="text-white">{currentData[0].name} ({currentData[0].rate}%)</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Global Average: <strong className="text-white">86.7%</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Source: UNESCO & Census Reports</span>
          </div>
        </div>

      </div>
    </section>
  );
}
