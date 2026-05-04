import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative h-[40vh] bg-zinc-900">
        <Navbar />
        <div className="flex items-center justify-center h-full pt-20">
          <h1 className="text-6xl font-black text-white uppercase italic">Contact</h1>
        </div>
      </div>
      <section className="flex-grow py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's build something great together.</h2>
          <p className="text-xl text-zinc-600 mb-12">
            Reach out to us at <span className="text-red-600 font-bold">hello@pn-example.com</span>
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-zinc-50 rounded-2xl">
              <h4 className="font-bold mb-2">Office</h4>
              <p className="text-zinc-500">123 Innovation Drive<br />San Francisco, CA 94103</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-2xl">
              <h4 className="font-bold mb-2">Inquiries</h4>
              <p className="text-zinc-500">+1 (555) 000-1234<br />inquire@pn-example.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
