import React from "react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">⚡ TechBlog</h2>
          <p className="mt-2 text-sm">
            A modern tech blog for developers to learn React, JavaScript, and web development.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-3 mt-2 text-xl">
            <span className="cursor-pointer hover:text-blue-400">🐦</span>
            <span className="cursor-pointer hover:text-blue-600">💼</span>
            <span className="cursor-pointer hover:text-pink-500">📸</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 TechBlog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;