import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import RSVP from "./components/RSVP";

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} pestaria.com — Crafted for joyful celebrations</p>
        <div className="flex items-center gap-4">
          <a href="#highlights" className="hover:text-gray-900">Highlights</a>
          <a href="#rsvp" className="hover:text-gray-900">RSVP</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(255,237,241,0.6),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,228,214,0.6),transparent_60%)]">
      <NavBar />
      <main>
        <Hero />
        <Highlights />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
