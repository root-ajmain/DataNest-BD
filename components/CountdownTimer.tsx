'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const CYCLE_MS = 15 * 24 * 60 * 60 * 1000;
const EPOCH = new Date('2025-01-01T00:00:00.000Z').getTime();

function getRemaining() {
  const elapsed = Date.now() - EPOCH;
  const ms = CYCLE_MS - (elapsed % CYCLE_MS);
  return {
    days:    Math.floor(ms / 86_400_000),
    hours:   Math.floor((ms % 86_400_000) / 3_600_000),
    minutes: Math.floor((ms % 3_600_000)  / 60_000),
    seconds: Math.floor((ms % 60_000)     / 1_000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div
        className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-lg shadow-emerald-900/20"
        style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.35) 0%, rgba(4,47,46,0.25) 100%)' }}
      >
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

        <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-center gap-4">
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <Clock className="w-4 h-4 text-emerald-400" />
            <p className="text-xs sm:text-sm font-bold text-emerald-300 whitespace-nowrap">
              Offer Ends In
            </p>
          </div>

          {/* Countdown digits */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-center sm:justify-start">
            {[
              { value: time.days,    label: 'Days'    },
              { value: time.hours,   label: 'Hours'   },
              { value: time.minutes, label: 'Mins'    },
              { value: time.seconds, label: 'Secs'    },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && (
                  <span className="text-emerald-600 font-black text-lg leading-none -mt-2 select-none">:</span>
                )}
                <div className="text-center">
                  <div
                    className="w-12 sm:w-14 h-10 sm:h-12 rounded-xl flex items-center justify-center font-black text-xl sm:text-2xl text-white tabular-nums"
                    style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    {pad(value)}
                  </div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right label */}
          <div className="shrink-0 hidden sm:block">
            <span className="inline-flex items-center bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-black px-3 py-1.5 rounded-full whitespace-nowrap">
              50% OFF ends soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
