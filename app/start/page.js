

"use client"
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-800 px-6 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">About Get Me A Chai ☕</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get Me A Chai is a delightful app that lets you support your favorite creators by buying them a virtual cup of chai.
          Whether you are a developer, artist, or content creator — this platform helps you connect with your audience in a meaningful way.
        </p>
      </div>

      {/* Features */}
      <section className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🔒 Secure Login</h2>
          <p className="text-gray-600">Login using GitHub securely. No passwords, no hassle.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">📄 Personal Page</h2>
          <p className="text-gray-600">Your own page with profile, cover image, and donation button.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">💸 Easy Payments</h2>
          <p className="text-gray-600">Razorpay-powered payments with real-time donation updates.</p>
        </div>
      </section>

      {/* Creator Info */}
      <section className="mt-16 bg-white max-w-4xl mx-auto rounded-xl p-8 shadow-md text-center">
        <h3 className="text-2xl font-bold text-purple-700 mb-3">👩‍💻 Meet the Creator</h3>
        <p className="text-gray-700 mb-2">Hi, I’m <span className="text-purple-600 font-semibold">Tulsi</span>, a passionate MERN Stack Developer.</p>
        <p className="text-gray-500">
          I built this app to learn, grow, and support fellow creators who do amazing work online. ❤️
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
     
        <Link href="/">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition">
            Go to Homepage
          </button>
        </Link>
      </section>

   
    </main>
  );
}
