import Link from "next/link";
import ChipScroll from "@/components/ChipScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <ChipScroll />

      {/* Footer section after scroll animation */}
      <section className="relative bg-[#0d0d0d] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white/90 tracking-tight mb-6">
            Ready to Transform Your AI Infrastructure?
          </h3>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Join the next generation of AI pioneers. NeuralCore X1 is designed
            for those who refuse to compromise on performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-medium text-base rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Request Demo
            </Link>
            <Link
              href="/specs"
              className="px-8 py-4 bg-transparent border border-white/20 text-white/90 font-medium text-base rounded-full hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Specs
            </Link>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
            <p className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-3">
              Performance
            </p>
            <h4 className="text-3xl md:text-4xl font-semibold text-white/90 tracking-tight">
              10x Faster
            </h4>
            <p className="text-white/50 mt-2">
              Than previous generation chips
            </p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
            <p className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-3">
              Efficiency
            </p>
            <h4 className="text-3xl md:text-4xl font-semibold text-white/90 tracking-tight">
              50% Less
            </h4>
            <p className="text-white/50 mt-2">
              Power consumption per operation
            </p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
            <p className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-3">
              Memory
            </p>
            <h4 className="text-3xl md:text-4xl font-semibold text-white/90 tracking-tight">
              1TB HBM3
            </h4>
            <p className="text-white/50 mt-2">
              High bandwidth memory included
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-24 pt-12 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              NeuralCore X1. A fictional product demo.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                Terms
              </a>
              <Link
                href="/contact"
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
