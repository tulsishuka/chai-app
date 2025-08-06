
"use client"
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white shadow-md  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and title */}
        <Link href="/" className="flex items-center gap-2">
          <Image width={50} height={50} src="/chai2.gif" alt="logo" />
          <h1 className="text-xl font-bold">Get me a chai</h1>
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap items-center">
          {session ? (
            <>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {session.user.email}
                  <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div className={`absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg ${showDropdown ? '' : 'hidden'}`}>
                  <ul className="py-2 text-sm">
                    <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link></li>
                    <li><Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100">Your Page</Link></li>
                    <li><Link href="/" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>
                    <li><button onClick={() => signOut()} className="w-full text-left px-4 py-2 hover:bg-gray-100">Sign Out</button></li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => signOut()}
                className="text-purple-500 border border-purple-500 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-gradient-to-br from-green-400 to-blue-600 hover:opacity-90 px-6 py-3 rounded-lg text-sm font-medium">
                Login
              </button>
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {session ? (
              <>
                <Link href="/about" className="hover:text-blue-400">About</Link>
                <Link href={`/${session.user.name}`} className="hover:text-blue-400">Your Page</Link>
                <Link href="/" className="hover:text-blue-400">Dashboard</Link>
                <button onClick={() => signOut()} className="text-left text-red-500 hover:underline">Sign Out</button>
              </>
            ) : (
              <Link href="/login">
                <button className="bg-gradient-to-br from-green-400 to-blue-600 hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium w-full">
                  Login
                </button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
