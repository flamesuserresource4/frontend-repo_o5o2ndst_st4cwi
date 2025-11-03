import { PartyPopper } from "lucide-react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-orange-400 text-white grid place-items-center shadow">
            <PartyPopper size={20} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">pestaria.com</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#highlights" className="hover:text-gray-900 transition">Highlights</a>
          <a href="#details" className="hover:text-gray-900 transition">Details</a>
          <a href="#rsvp" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gray-900 text-white hover:bg-black transition">
            RSVP
          </a>
        </nav>
      </div>
    </header>
  );
}
