import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 shadow-sm mt-8 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex  md:items-center md:justify-beetwen">
        <span className="text-sm text-gray-600 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            Abdurrohim
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
