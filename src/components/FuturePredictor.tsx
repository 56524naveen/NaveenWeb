import React, { useState } from 'react';
import { Sparkles, Calendar, User, Compass, Star, Sun, ShieldCheck, RefreshCw, Award } from 'lucide-react';

interface PredictionResult {
  lifePathNumber: number;
  zodiacSign: string;
  element: string;
  luckyNumber: number;
  luckyColor: string;
  careerInsight: string;
  futureForecast: string;
}

export default function FuturePredictor() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  // Calculate Life Path Number from DOB (YYYY-MM-DD)
  const calculateLifePath = (dateStr: string): number => {
    const digits = dateStr.replace(/\D/g, '');
    let sum = digits.split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
    }
    return sum;
  };

  // Determine Zodiac Sign from Month & Day
  const getZodiacSign = (dateStr: string): string => {
    const d = new Date(dateStr);
    const day = d.getUTCDate();
    const month = d.getUTCMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    return "Pisces";
  };

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !dob) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const lifePath = calculateLifePath(dob);
      const zodiac = getZodiacSign(dob);

      const colors = ["Electric Blue", "Golden Amber", "Emerald Green", "Royal Violet", "Crimson Red", "Cosmic Silver"];
      const elements = ["Fire", "Earth", "Air", "Water"];
      
      const charCodeSum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const luckyColor = colors[charCodeSum % colors.length];
      const element = elements[(lifePath + charCodeSum) % elements.length];
      const luckyNum = ((lifePath * 7) % 88) + 1;

      const forecasts = [
        `Great opportunities in leadership and creative innovation await ${name}. Your dedication will unlock major career breakthroughs within the next cycle.`,
        `${name}'s analytical mindset and determination will pave the way for extraordinary personal growth and financial stability.`,
        `New collaborative ventures and meaningful connections will bring transformative success to ${name} in the near future.`,
        `Focusing on passion projects will bring ${name} recognition and fulfillment. Strategic planning will yield remarkable results.`
      ];

      const insights = [
        "Strong natural intuition and high problem-solving capacity.",
        "Exceptional resilience when facing complex challenges.",
        "Ability to inspire others and drive collaborative success.",
        "Visionary approach to career, learning, and personal mastery."
      ];

      setResult({
        lifePathNumber: lifePath,
        zodiacSign: zodiac,
        element: element,
        luckyNumber: luckyNum,
        luckyColor: luckyColor,
        careerInsight: insights[charCodeSum % insights.length],
        futureForecast: forecasts[charCodeSum % forecasts.length]
      });

      setLoading(false);
    }, 800);
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-16 px-4 relative z-20">
      {/* Ambient Backdrop Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse pointer-events-none"></div>

      {/* Main Card */}
      <div className="relative bg-[#0a0e17]/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(147,51,234,0.2)] overflow-hidden text-left">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-wide">
            <Compass className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Future & Life Path Calculator</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Entertainment & Guidance Tool</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Discover Your Future & Life Path
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Enter your name and date of birth to generate your personalized life path number, zodiac alignment, and future outlook.
        </p>

        {/* Input Form */}
        <form onSubmit={handlePredict} className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
          <div className="sm:col-span-2 relative">
            <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          <div className="sm:col-span-2 relative">
            <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
            <input
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !name.trim() || !dob}
            className="sm:col-span-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white py-2.5 px-4 rounded-xl text-sm font-semibold shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Predict</span>
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Loading Spinner State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-10 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md">
            <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-medium text-purple-400 animate-pulse">Calculating numerology & zodiac life path coordinates...</p>
          </div>
        )}

        {/* Prediction Results Card */}
        {result && !loading && (
          <div className="border border-purple-500/30 rounded-2xl bg-gradient-to-b from-purple-950/20 to-black/60 p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Top Stat Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col items-center text-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Life Path</span>
                <span className="text-xl font-extrabold text-purple-400 mt-0.5">#{result.lifePathNumber}</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col items-center text-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Zodiac Sign</span>
                <span className="text-sm font-bold text-white mt-1">{result.zodiacSign}</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col items-center text-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Element</span>
                <span className="text-sm font-bold text-blue-400 mt-1">{result.element}</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col items-center text-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Lucky Number</span>
                <span className="text-xl font-extrabold text-emerald-400 mt-0.5">{result.luckyNumber}</span>
              </div>
            </div>

            {/* Future Forecast Box */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Future & Career Outlook</h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed bg-white/5 border border-white/10 p-4 rounded-xl">
                {result.futureForecast}
              </p>
            </div>

            {/* Key Strength / Insight */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-blue-400" />
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Primary Core Strength</h4>
              </div>
              <p className="text-gray-300 text-xs bg-white/5 border border-white/10 p-3 rounded-xl">
                {result.careerInsight}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Lucky Color: <strong className="text-white">{result.luckyColor}</strong></span>
              </div>

              <button
                onClick={() => setResult(null)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Reset
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
