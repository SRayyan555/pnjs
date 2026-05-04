export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-3xl font-black mb-6">LOGO</div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              We are building the infrastructure for the next generation of digital giants. Join us on our journey.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-zinc-400">
              <li className="hover:text-red-600 transition-colors cursor-pointer">Home</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">About</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-6">Socials</h5>
            <ul className="space-y-4 text-zinc-400">
              <li className="hover:text-red-600 transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-900 text-zinc-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 PN Inc. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-widest">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
