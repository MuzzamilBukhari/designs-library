export default function Hero1() {
  return (
    <section className="w-full py-24 bg-gray-50 flex items-center justify-center min-h-[60vh]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Welcome to your <span className="text-blue-600">Section Library</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          This is a placeholder hero section. Once you provide prompts for new sections, they will be built and added to the registry for you to preview.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
