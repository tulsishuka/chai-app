import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4 ">
            <div className="container mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p className="text-xs mt-2">Follow us on 
                <a href="#" className="text-blue-400 hover:underline ml-1">Twitter</a>, 
                <a href="#" className="text-blue-400 hover:underline ml-1">GitHub</a>
            </p>
            </div>
        </footer>

    </div>
  )
}

export default Footer