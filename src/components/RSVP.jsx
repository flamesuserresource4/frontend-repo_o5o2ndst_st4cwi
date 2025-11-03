import { useMemo, useState } from "react";
import { Send } from "lucide-react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("Yes");
  const [guests, setGuests] = useState(0);
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const to = "rsvp@pestaria.com";
    const subject = encodeURIComponent("RSVP • Pestaria Celebration");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nAttending: ${attendance}\nGuests: ${guests}\nMessage: ${message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [name, email, attendance, guests, message]);

  return (
    <section id="rsvp" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">RSVP</h2>
            <p className="mt-3 text-gray-600">Let us know if you can make it. Your response helps us prepare the most delightful experience for you.</p>

            <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Johnson" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alex@mail.com" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Attending</label>
                  <select value={attendance} onChange={(e) => setAttendance(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Guests</label>
                  <input type="number" min={0} value={guests} onChange={(e) => setGuests(parseInt(e.target.value || "0"))} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add any dietary needs or a sweet note ✨" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <a href={mailtoHref} className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-white font-medium shadow hover:bg-rose-600 transition">
                  <Send size={18} /> Send RSVP
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop" alt="Venue map" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <p className="font-semibold">Grand Pavilion, City Center</p>
              <p>123 Celebration Ave, Suite 400</p>
              <a className="mt-2 inline-flex text-rose-600 hover:text-rose-700 underline" href="https://maps.google.com" target="_blank" rel="noreferrer">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
