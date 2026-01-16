import Link from "next/link";

const specs = [
  {
    category: "Processing",
    items: [
      { label: "Parameters", value: "256 Billion" },
      { label: "Tensor Cores", value: "16,384" },
      { label: "CUDA Cores", value: "32,768" },
      { label: "Clock Speed", value: "2.1 GHz (Base) / 3.2 GHz (Boost)" },
      { label: "FP16 Performance", value: "1.8 PFLOPS" },
      { label: "FP32 Performance", value: "920 TFLOPS" },
      { label: "INT8 Performance", value: "3.6 PFLOPS" },
    ],
  },
  {
    category: "Memory",
    items: [
      { label: "Memory Type", value: "HBM3e" },
      { label: "Memory Capacity", value: "1 TB" },
      { label: "Memory Bandwidth", value: "8 TB/s" },
      { label: "L2 Cache", value: "256 MB" },
      { label: "Memory Interface", value: "8192-bit" },
    ],
  },
  {
    category: "Connectivity",
    items: [
      { label: "Interconnect", value: "NeuralLink 5.0" },
      { label: "NeuralLink Bandwidth", value: "1.8 TB/s (bidirectional)" },
      { label: "PCIe", value: "Gen 6 x16" },
      { label: "Max GPUs per Node", value: "8" },
      { label: "Network", value: "400 Gbps Ethernet" },
    ],
  },
  {
    category: "Power & Thermal",
    items: [
      { label: "TDP", value: "700W" },
      { label: "Max Power", value: "900W" },
      { label: "Cooling", value: "Liquid Cooling Required" },
      { label: "Max Junction Temp", value: "95°C" },
    ],
  },
  {
    category: "Physical",
    items: [
      { label: "Process Node", value: "3nm" },
      { label: "Transistor Count", value: "280 Billion" },
      { label: "Die Size", value: "814 mm²" },
      { label: "Form Factor", value: "SXM6" },
    ],
  },
  {
    category: "Software Support",
    items: [
      { label: "AI Frameworks", value: "PyTorch, TensorFlow, JAX" },
      { label: "Precision Support", value: "FP64, FP32, TF32, FP16, BF16, FP8, INT8" },
      { label: "SDK", value: "NeuralCore SDK 2.0" },
      { label: "Virtualization", value: "MIG (Multi-Instance GPU)" },
    ],
  },
];

export default function SpecsPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] px-6 py-24">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link
          href="/"
          className="text-white/50 hover:text-white/80 transition-colors text-sm flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-4">
            Technical Details
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight mb-4">
            NeuralCore X1 Specifications
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Built on cutting-edge 3nm technology, the NeuralCore X1 delivers
            unprecedented AI performance for enterprise workloads.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specs.map((section) => (
            <div
              key={section.category}
              className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl"
            >
              <h2 className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-start gap-4"
                  >
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-white/90 text-sm font-medium text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-12 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-white/90 tracking-tight mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact our sales team to discuss your AI infrastructure needs and
            get a custom quote for NeuralCore X1.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-medium text-base rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Request Demo
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center text-white/30 text-sm">
          * All specifications are for demonstration purposes only. NeuralCore X1
          is a fictional product.
        </p>
      </div>
    </main>
  );
}
