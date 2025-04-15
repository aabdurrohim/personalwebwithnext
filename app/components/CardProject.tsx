"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}
// Komponen Card Artikel - Full Width Version
export default function CardProject({ title, excerpt, slug, imageUrl, date, category }: ProjectProps) {
  return (
    <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      <div className="flex flex-col md:flex-row h-full gap-4 p-4">
        {/* Gambar Artikel */}
        <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-auto md:h-auto h-[200px] border border-gray-300 rounded-lg overflow-hidden">
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          ) : (
            <div className="h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}

          {/* Category Badge */}
          {category && <span className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{category}</span>}
        </div>

        {/* Konten Artikel */}
        <div className="md:w-2/3 flex flex-col justify-between px-1">
          <div>
            {/* Tanggal Publikasi */}
            {date && (
              <span className="text-xs text-gray-500 mb-2 block">
                {new Date(date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}

            {/* Judul Artikel */}
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>

            {/* Paragraf Singkat */}
            <p className="mb-4 text-base font-normal text-gray-700 text-justify line-clamp-3">{excerpt}</p>
          </div>

          {/* Tombol Baca Selengkapnya */}
          <Link href={`/projects/${slug}`} className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition duration-300 w-fit">
            <span className="text-gray-700 group-hover:text-gray-900">Baca selengkapnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
