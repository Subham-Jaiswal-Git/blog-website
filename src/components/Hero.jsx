export default function Hero() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-5xl font-bold">
          Future of Tech Blogs 🚀
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Deep dive into React, JavaScript, AI, Backend & modern development.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Start Reading
        </button>
      </div>
    </section>
  );
}
