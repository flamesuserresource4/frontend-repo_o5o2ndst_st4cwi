import { Image, MapPin, Music, Share2 } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: <Image className="text-rose-500" size={22} />,
      title: "Photo Gallery",
      desc: "Showcase your favorite memories and teaser shots in a beautiful grid.",
    },
    {
      icon: <MapPin className="text-rose-500" size={22} />,
      title: "Instant Maps",
      desc: "One-tap directions to the venue so guests never get lost.",
    },
    {
      icon: <Music className="text-rose-500" size={22} />,
      title: "Curated Vibes",
      desc: "Embed playlists and set the mood before the big day.",
    },
    {
      icon: <Share2 className="text-rose-500" size={22} />,
      title: "Easy Sharing",
      desc: "Send via link or QR—no apps to install, works on any device.",
    },
  ];

  return (
    <section id="highlights" className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Why Pestaria?</h2>
          <p className="mt-3 text-gray-600">Everything you need for a stunning e‑invitation, thoughtfully designed for elegance and ease.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-rose-50 grid place-items-center mb-3">
                {it.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>

        <div id="details" className="mt-16 grid md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop" alt="Highlight 1" className="h-56 w-full object-cover rounded-2xl"/>
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Highlight 2" className="h-56 w-full object-cover rounded-2xl"/>
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" alt="Highlight 3" className="h-56 w-full object-cover rounded-2xl"/>
        </div>
      </div>
    </section>
  );
}
