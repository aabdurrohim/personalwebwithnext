"use client"; // Menandakan bahwa komponen ini berjalan di sisi klien (Next.js 13+ dengan App Router)

import React, { useEffect, useState } from "react"; // Mengimpor React, useEffect untuk efek samping, dan useState untuk state menu
import Image from "next/image"; // Mengimpor komponen Image dari Next.js untuk optimasi gambar
import Link from "next/link"; // Menggunakan Link dari Next.js untuk navigasi yang lebih cepat tanpa reload halaman
import { usePathname } from "next/navigation"; // Hook untuk mendapatkan path URL saat ini
import avatarImage from "@/public/images/avatar.png"; // Mengimpor gambar avatar dari folder assets atau public

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol apakah menu mobile terbuka atau tidak
  const pathname = usePathname(); // Mendapatkan path halaman saat ini untuk menyesuaikan tampilan menu aktif

  // Fungsi untuk toggle menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Jika menu terbuka, tutup; jika tertutup, buka
  };

  // Efek untuk menutup menu saat navigasi berubah (misalnya, pengguna berpindah halaman)
  useEffect(() => {
    setIsMenuOpen(false); // Tutup menu setelah navigasi berhasil
  }, [pathname]);

  return (
    <nav className="bg-white border-gray-200">
      {" "}
      {/* Navbar dengan background putih dan border abu-abu */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {" "}
        {/* Container utama navbar */}
        {/* Logo atau brand */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={avatarImage} alt="Avatar" width={32} height={32} className="h-8 w-8" /> {/* Gambar avatar */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Abe.</span> {/* Nama brand */}
        </Link>
        {/* Tombol menu untuk tampilan mobile */}
        <button
          onClick={toggleMenu} // Ketika tombol diklik, toggle menu
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default" // Aksesibilitas untuk mengontrol navbar
          aria-expanded={isMenuOpen} // Memberikan informasi apakah menu sedang terbuka atau tidak
        >
          <span className="sr-only">Open main menu</span> {/* Label untuk screen reader */}
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            {/* Ikon menu burger untuk tampilan mobile */}
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        {/* Daftar menu navigasi */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {/* Menu Home */}
            <li>
              <Link href="/" className={`block py-2 px-3 rounded-sm md:p-0 ${pathname === "/" ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900"}`}>
                Home
              </Link>
            </li>

            {/* Menu Projects */}
            <li>
              <Link href="/projects" className={`block py-2 px-3 rounded-sm md:p-0 ${pathname === "/projects" ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900"}`}>
                Project
              </Link>
            </li>

            {/* Menu Blog */}
            <li>
              <Link href="/blog" className={`block py-2 px-3 rounded-sm md:p-0 ${pathname === "/blog" ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900"}`}>
                Blog
              </Link>
            </li>

            {/* Menu Contact */}
            <li>
              <Link href="/contact" className={`block py-2 px-3 rounded-sm md:p-0 ${pathname === "/contact" ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
