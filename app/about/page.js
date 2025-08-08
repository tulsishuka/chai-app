"use client"
import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Get Me A Chai</h1>

        <p className="mb-4 text-lg text-slate-300">
          <strong>Get Me A Chai</strong> is a fun and simple platform that allows creators, developers,
          and freelancers to receive support from their audience in the form of small donations —
          just like buying someone a cup of chai ☕.
        </p>

        <p className="mb-4 text-lg text-slate-300">
          Whether you are an indie developer, an artist, or someone doing awesome work online,
          Get Me A Chai helps you connect with your fans and allow them to appreciate your efforts through a meaningful gesture.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🌟 Features</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Quick and easy GitHub login</li>
          <li>Personal payment page with your profile and message</li>
          <li>Secure payments using Razorpay</li>
          <li>Donor messages and total raised amount</li>
          <li>Responsive design for all devices</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🚀 How It Works</h2>
        <ol className="list-decimal pl-6 text-slate-300 space-y-2">
          <li>Login with your GitHub account</li>
          <li>Get your own unique link</li>
          <li>Share it with your audience or friends</li>
          <li>Receive payments and messages directly</li>
        </ol>

        <div className="mt-10 text-center">
          <Link href="/">
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
