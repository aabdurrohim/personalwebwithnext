import React from "react";
import Link from "next/link";
import { FaArrowRight, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-white mt-8">
      <div className="max-w-2xl w-full p-8 space-y-8">
        <div className="flex flex-col space-y-6">
          {/* Name with subtle animation */}
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-gray-800 hover:text-gray-600 transition duration-300">Fikri Abdurrohim Ibnu Prabowo</h1>

            {/* Location with icon */}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <a href="https://maps.app.goo.gl/rFHYJ6q2KHHhnE3H7" target="_blank" className="hover:text-gray-800 transition duration-200">
                Surakarta, Indonesia
              </a>
            </div>
          </div>

          {/* Introduction text */}
          <div className="prose prose-lg text-gray-700">
            <p className="leading-relaxed">Halo! 🖐🏻 Anda bisa memanggil saya Abe, dan ini adalah situs pribadi saya. Situs ini akan menampilkan beberapa pengalaman saya di bidang teknologi, terutama pemrograman.</p>
          </div>

          {/* Social media links with enhanced hover effects */}
          <div className="flex items-center space-x-8">
            <Link href="https://www.instagram.com/ficrabdr/" target="_blank" className="group" aria-label="Instagram">
              <FaInstagram className="text-3xl text-gray-600 group-hover:text-pink-600 transform group-hover:scale-110 transition duration-300" />
            </Link>

            <Link href="https://www.linkedin.com/in/fikriabdurrohim/" target="_blank" className="group" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl text-gray-600 group-hover:text-blue-600 transform group-hover:scale-110 transition duration-300" />
            </Link>
            <Link href="https://github.com/aabdurrohim" target="_blank" className="group" aria-label="Github">
              <FaGithub className="text-3xl text-gray-600 group-hover:text-[#181717] transform group-hover:scale-110 transition duration-300" />
            </Link>
            <Link href="mailto:abdurrohim.i.p@gmail.com" className="group" aria-label="Email">
              <CiMail className="text-3xl text-gray-600 group-hover:text-red-600 transform group-hover:scale-110 transition duration-300" />
            </Link>
          </div>

          {/* Projects link with animation */}
          <Link href="/projects" className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition duration-300 w-fit">
            <span className="text-gray-700 group-hover:text-gray-900">Go to my projects</span>
            <FaArrowRight className="text-gray-600 group-hover:text-gray-900 transform group-hover:translate-x-1 transition duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
