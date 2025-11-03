import { CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-pink-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 left-[-10%] h-[36rem] w-[36rem] rounded-full bg-orange-200 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow border border-black/5">
              Elegant Web E‑Invitation
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
              Celebrate beautifully with Pestaria
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed">
              Create delightful online invitations with schedules, maps, photo galleries and RSVP—crafted to look perfect on any device.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 border border-black/5 shadow-sm">
                <CalendarDays size={18} className="text-gray-900" />
                <span>Saturday, 21 June 2025 • 6:00 PM</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 border border-black/5 shadow-sm">
                <MapPin size={18} className="text-gray-900" />
                <span>Grand Pavilion, City Center</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#rsvp" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium shadow hover:bg-black transition">
                RSVP Now
              </a>
              <a href="#highlights" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition">
                Explore Highlights
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-rose-400 via-pink-400 to-orange-300 p-1 shadow-xl">
              <div className="h-full w-full rounded-[22px] bg-white grid place-items-center">
                <div className="text-center px-6 py-10">
                  <p className="text-sm tracking-widest font-semibold text-rose-500">YOU'RE INVITED</p>
                  <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">The Pestaria Celebration</p>
                  <p className="mt-3 text-gray-600 max-w-xs mx-auto">Share the joy with a modern e‑invitation that sparkles with personality.</p>
                </div>
                <div className="w-full px-6 pb-8">
                  <div className="grid grid-cols-3 gap-3">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" alt="Event" className="h-28 w-full object-cover rounded-xl"/>
                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" alt="Decor" className="h-28 w-full object-cover rounded-xl"/>
                    <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Venue" className="h-28 w-full object-cover rounded-xl"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
