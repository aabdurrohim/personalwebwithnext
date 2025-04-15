import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-white">
      <div className="max-w-3xl w-full p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-gray-600 max-w-lg mx-auto">Feel free to reach me out via email or social media if you have any questions or would like to collaborate.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Contact Information</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CiMail className="text-xl text-gray-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800 hover:text-gray-600 transition">abdurrohim.i.p@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-xl text-gray-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <a href="https://maps.app.goo.gl/rFHYJ6q2KHHhnE3H7" target="_blank" className="text-gray-800 hover:text-gray-600 transition">
                  Surakarta, Indonesia
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">Social Media</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/abdvrrohim/" target="_blank" className="bg-white p-2 rounded-full shadow-sm hover:shadow transition" aria-label="Instagram">
                  <FaInstagram className="text-xl text-gray-700 hover:text-pink-600 transition" />
                </a>
                <a href="https://www.linkedin.com/in/fikriabdurrohim/" target="_blank" className="bg-white p-2 rounded-full shadow-sm hover:shadow transition" aria-label="LinkedIn">
                  <FaLinkedin className="text-xl text-gray-700 hover:text-blue-600 transition" />
                </a>
                <a href="https://github.com/aabdurrohim" target="_blank" className="bg-white p-2 rounded-full shadow-sm hover:shadow transition" aria-label="Github">
                  <FaGithub className="text-xl text-gray-700 hover:text-[#181717] transition" />
                </a>
                <a href="https://www.youtube.com/@bDocs" target="_blank" className="bg-white p-2 rounded-full shadow-sm hover:shadow transition" aria-label="Github">
                  <FaYoutube className="text-xl text-gray-700 hover:text-red-600 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This website is built by me using Next.js, and some of the data inside is dummy data for demonstration purposes only.</p>
        </div>
      </div>
    </div>
  );
}
