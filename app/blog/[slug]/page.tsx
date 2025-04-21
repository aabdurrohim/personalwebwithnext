import { notFound } from "next/navigation";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Mengenal Next.js 14: Framework React untuk Pengembangan Web Modern",
    excerpt: "Next.js 14 hadir dengan peningkatan kinerja yang signifikan dan fitur-fitur baru yang memudahkan pengembangan aplikasi React. Artikel ini membahas fitur utama dan cara implementasinya dalam proyek Anda.",
    slug: "mengenal-nextjs-14",
    imageUrl: "/images/nextjs-14.png",
    date: "2025-02-01",
    category: "Web Development",
    content1: `Next.js 14 menandai langkah evolusi yang signifikan dalam ekosistem pengembangan web modern, terutama bagi para pengembang React yang mencari solusi yang lebih efisien dan performatif. Peningkatan kinerja rendering server-side (SSR) dan static site generation (SSG) adalah inti dari pembaruan ini, yang diwujudkan melalui algoritma optimasi yang lebih canggih dan mekanisme caching yang ditingkatkan. Dengan demikian, Next.js 14 tidak hanya mempercepat waktu pemuatan halaman secara drastis tetapi juga meningkatkan interaktivitas pengguna secara keseluruhan, memberikan pengalaman yang lebih responsif dan lancar.`,
    content2: `Ini sangat penting untuk aplikasi web yang berfokus pada pengalaman pengguna yang cepat dan mulus, seperti e-commerce, media sosial, dan aplikasi produktivitas.`,
  },
  {
    id: 2,
    title: "Panduan Lengkap Tailwind CSS untuk Pemula",
    excerpt: "Tailwind CSS telah menjadi framework CSS yang populer di kalangan web developer. Artikel ini membahas cara setup, konfigurasi, dan penggunaan utility-class untuk mempercepat proses styling website Anda.",
    slug: "panduan-tailwind-css",
    imageUrl: "/images/tailwind-css.png",
    date: "2025-02-15",
    category: "CSS",
    content1: `Tailwind CSS merevolusi cara pengembang web mendekati styling dengan pendekatan utility-first, yang memungkinkan mereka untuk membangun antarmuka pengguna yang unik dan responsif dengan cepat. Berbeda dengan framework CSS tradisional yang menyediakan komponen siap pakai, Tailwind menawarkan sekumpulan class utility yang dapat dikombinasikan untuk menciptakan desain khusus tanpa harus menulis CSS kustom yang panjang dan berulang. Pendekatan ini memberikan fleksibilitas tak tertandingi, memungkinkan pengembang untuk mengontrol setiap aspek desain dengan presisi tinggi dan efisiensi yang luar biasa. Salah satu fitur paling kuat dari Tailwind adalah kemampuannya untuk mengoptimalkan ukuran file CSS melalui fitur purge, yang secara otomatis menghapus class utility yang tidak digunakan dalam proyek. Ini menghasilkan file CSS yang lebih kecil dan lebih efisien, yang sangat penting untuk performa web, terutama pada perangkat seluler dan jaringan dengan bandwidth terbatas. Selain itu, Tailwind juga mendukung mode dark mode secara native, memungkinkan pengembang untuk dengan mudah mengimplementasikan tema gelap yang populer saat ini dengan hanya menambahkan beberapa class utility.`,
    content2: `Menggunakan Tailwind sangatlah intuitif dan efisien, karena class utility-nya mencakup hampir semua aspek desain, mulai dari margin, padding, dan warna hingga grid, flexbox, dan tipografi. Dengan class utility yang deskriptif dan mudah diingat, pengembang dapat dengan cepat mengubah tampilan elemen tanpa harus beralih antara file HTML dan CSS. Misalnya, untuk membuat tombol dengan padding, margin, warna latar belakang, dan warna teks tertentu, cukup gunakan class seperti p-4, m-2, bg-blue-500, dan text-white. Pendekatan ini tidak hanya mempercepat proses pengembangan tetapi juga membuat kode lebih mudah dibaca, dipelihara, dan dikelola dalam proyek berskala besar. Tailwind CSS juga sangat terintegrasi dengan ekosistem JavaScript modern, dengan dukungan untuk berbagai framework seperti React, Vue.js, dan Angular. Instalasi dan konfigurasi yang mudah, dokumentasi yang komprehensif, dan komunitas yang aktif membuat Tailwind menjadi alat yang sangat berharga untuk pengembangan web modern. Dengan Tailwind, pengembang dapat fokus pada logika aplikasi dan pengalaman pengguna tanpa harus khawatir tentang detail styling yang rumit, memungkinkan mereka untuk membangun aplikasi web yang indah, responsif, dan performatif dengan cepat dan efisien.`,
  },
  {
    id: 3,
    title: "Mengoptimalkan Performa Website dengan Teknik Modern",
    excerpt: "Kecepatan loading website sangat berpengaruh pada pengalaman pengguna dan SEO. Pelajari teknik-teknik terbaru untuk meningkatkan performa website Anda mulai dari optimasi gambar hingga implementasi lazy loading.",
    slug: "optimasi-performa-website",
    imageUrl: "/images/web-performance.png",
    date: "2025-02-20",
    category: "Performance",
    content1: `Performa website adalah faktor kritis yang memengaruhi pengalaman pengguna, peringkat SEO, dan tingkat konversi. Website yang lambat tidak hanya membuat frustrasi pengguna tetapi juga dapat merusak reputasi merek dan mengurangi pendapatan. Oleh karena itu, optimasi performa website adalah investasi yang penting untuk kesuksesan online. Dalam era digital yang serba cepat ini, pengguna mengharapkan website untuk memuat dengan cepat dan responsif, dan mereka cenderung meninggalkan situs yang lambat dan mencari alternatif yang lebih cepat. Salah satu teknik optimasi yang paling efektif adalah optimasi gambar, yang seringkali menjadi penyebab utama lambatnya loading website, terutama pada perangkat seluler.`,
    content2: `Dengan mengompres gambar menggunakan format modern seperti WebP, menerapkan teknik lazy loading, dan menggunakan CDN (Content Delivery Network), pengembang dapat secara signifikan meningkatkan kecepatan loading halaman. Selain itu, penggunaan atribut srcset dan ukuran gambar yang responsif juga penting untuk memastikan gambar ditampilkan dengan optimal di berbagai perangkat dan ukuran layar, memberikan pengalaman pengguna yang mulus dan konsisten.`,
  },
  {
    id: 4,
    title: "Pengenalan Dasar JavaScript ES6 untuk Pemula",
    excerpt: "JavaScript ES6 membawa perubahan besar dalam pengembangan web. Artikel ini membahas fitur-fitur dasar ES6 dan bagaimana cara menggunakannya dalam proyek Anda.",
    slug: "pengenalan-es6",
    imageUrl: "/images/es6.png",
    date: "2025-03-10",
    category: "JavaScript",
    content1: `ECMAScript 2015, atau yang lebih dikenal sebagai ES6, menandai titik balik penting dalam evolusi JavaScript, membawa perubahan besar dalam cara pengembang menulis kode dan membangun aplikasi web. Dengan memperkenalkan berbagai fitur baru dan peningkatan sintaksis, ES6 membuat penulisan kode JavaScript menjadi lebih ringkas, ekspresif, dan mudah dibaca. Bagi pemula yang ingin memulai perjalanan mereka dalam pengembangan web, memahami dasar-dasar ES6 adalah langkah penting untuk membangun fondasi yang kuat dan mempersiapkan diri untuk pengembangan web modern. Salah satu fitur paling menonjol dari ES6 adalah deklarasi variabel menggunakan let dan const, yang menggantikan var yang seringkali membingungkan. Berbeda dengan var, let dan const memiliki cakupan blok dan tidak dapat diangkat (hoisted), yang membantu menghindari kesalahan umum yang terkait dengan hoisting dan cakupan variabel.`,
    content2: `Selain itu, ES6 juga memperkenalkan template literals, yang memungkinkan pengembang untuk menyisipkan variabel ke dalam string dengan mudah, membuat manipulasi string menjadi lebih intuitif dan efisien. Template literals juga mendukung multiline strings, yang menyederhanakan penulisan string panjang dan kompleks. Arrow functions adalah fitur lain yang sangat berguna yang diperkenalkan dalam ES6, menyediakan sintaks yang lebih ringkas dan tanpa konteks this sendiri. Dengan sintaks yang lebih ringkas, arrow functions membuat penulisan fungsi callback dan fungsi anonim menjadi lebih mudah dan lebih ekspresif.`,
  },
  {
    id: 5,
    title: "Membangun Aplikasi Web Progresif (PWA) dengan React",
    excerpt: "Aplikasi Web Progresif (PWA) memberikan pengalaman pengguna seperti aplikasi native di web. Artikel ini membahas cara membangun PWA dengan React dan fitur-fitur yang perlu diperhatikan.",
    slug: "membangun-pwa-react",
    imageUrl: "/images/pwa.png",
    date: "2025-03-20",
    category: "Web Development",
    content1: `Aplikasi Web Progresif (PWA) adalah revolusi dalam pengembangan web, menjembatani kesenjangan antara aplikasi web dan aplikasi native dengan memberikan pengalaman pengguna yang mulus dan kaya. Dengan memanfaatkan teknologi web modern, PWA dapat diinstal di perangkat pengguna, bekerja secara offline, dan mengirimkan notifikasi push, menjadikannya pilihan menarik bagi pengembang yang ingin menjangkau audiens yang lebih luas dan meningkatkan keterlibatan pengguna. React, dengan arsitektur berbasis komponennya yang kuat dan performa yang tinggi, sangat cocok untuk membangun PWA. Komponen React yang dapat digunakan kembali memungkinkan pengembang untuk membangun antarmuka pengguna yang kompleks dengan cepat dan efisien, sementara virtual DOM React memastikan bahwa aplikasi tetap responsif dan cepat bahkan saat menangani data yang besar. Untuk memulai, pengembang perlu menginstal beberapa paket npm dan mengonfigurasi file manifest.json, yang berisi metadata penting tentang PWA, seperti nama, ikon, dan tema. File manifest.json ini memungkinkan browser untuk mengenali PWA dan menawarkannya untuk diinstal pada perangkat pengguna, memberikan pengalaman seperti aplikasi native.`,
    content2: `Service worker adalah inti dari PWA, memungkinkan aplikasi untuk bekerja secara offline dan memberikan pengalaman yang konsisten bahkan dalam kondisi jaringan yang buruk. Service worker adalah skrip JavaScript yang berjalan di latar belakang, mencegat permintaan jaringan, dan menyimpan sumber daya di cache. Dengan mengimplementasikan service worker yang tepat, pengembang dapat memastikan bahwa PWA mereka tetap fungsional dan responsif bahkan ketika pengguna offline, memberikan pengalaman pengguna yang mulus dan tanpa gangguan. Service worker juga memungkinkan PWA untuk mengirimkan notifikasi push, yang dapat digunakan untuk memberi tahu pengguna tentang pembaruan, promosi, dan informasi penting lainnya. Selain itu, penting untuk memastikan bahwa PWA memenuhi kriteria PWA, seperti HTTPS, responsif, dan performa yang baik. HTTPS memastikan keamanan komunikasi antara pengguna dan server, melindungi data sensitif dan membangun kepercayaan pengguna. Desain responsif memastikan bahwa PWA berfungsi dengan baik di berbagai perangkat dan ukuran layar, memberikan pengalaman pengguna yang konsisten dan optimal. Dengan mengoptimalkan performa PWA, pengembang dapat mengurangi waktu pemuatan halaman, meningkatkan responsivitas aplikasi, dan memberikan pengalaman pengguna yang lancar dan menyenangkan, yang pada akhirnya meningkatkan keterlibatan pengguna dan tingkat konversi.`,
  },
  {
    id: 6,
    title: "Memanfaatkan GraphQL untuk Pengembangan API yang Efisien",
    excerpt: "GraphQL adalah bahasa query untuk API yang memungkinkan klien untuk meminta data yang mereka butuhkan. Artikel ini membahas keuntungan GraphQL dan bagaimana cara menggunakannya dalam proyek Anda.",
    slug: "graphql-api",
    imageUrl: "/images/graphql.png",
    date: "2025-03-25",
    category: "API",
    content1: `GraphQL adalah paradigma baru dalam pengembangan API, menawarkan alternatif yang lebih fleksibel dan efisien untuk REST API tradisional. Dengan memungkinkan klien untuk meminta data yang mereka butuhkan secara spesifik, GraphQL menghindari masalah over-fetching dan under-fetching data, yang seringkali menghambat performa aplikasi dan meningkatkan kompleksitas kode. GraphQL juga memungkinkan klien untuk meminta beberapa sumber daya dalam satu permintaan, mengurangi jumlah permintaan API dan meningkatkan efisiensi komunikasi antara klien dan server. Salah satu keuntungan utama GraphQL adalah fleksibilitasnya. Klien dapat menentukan struktur data yang mereka butuhkan, memungkinkan mereka untuk meminta hanya data yang relevan. Ini tidak hanya mengurangi jumlah data yang dikirim melalui jaringan tetapi juga menyederhanakan logika aplikasi di sisi klien, membuat kode lebih mudah dibaca dan dipelihara. GraphQL juga memungkinkan pengembang untuk membuat API yang kuat dan efisien dengan tipe data yang kuat dan sistem validasi, memastikan konsistensi dan integritas data. Dengan tipe data yang kuat, pengembang dapat mendefinisikan struktur data yang jelas dan menghindari kesalahan yang disebabkan oleh tipe data yang tidak cocok. Untuk menggunakan GraphQL, pengembang perlu menginstal beberapa paket npm dan mengonfigurasi server GraphQL.`,
    content2: `Mereka juga perlu mendefinisikan skema GraphQL, yang menentukan tipe data dan query yang tersedia. Setelah konfigurasi selesai, klien dapat mengirimkan query GraphQL untuk meminta data dari API, yang kemudian akan merespons dengan data yang sesuai. GraphQL juga mendukung fragment, yang memungkinkan pengembang untuk mendefinisikan potongan query yang dapat digunakan kembali, mengurangi duplikasi kode dan meningkatkan efisiensi pengembangan. GraphQL sangat cocok untuk aplikasi dengan kompleksitas tinggi, di mana klien perlu mengambil data dari berbagai sumber. Dengan memungkinkan klien untuk meminta data yang mereka butuhkan dalam satu permintaan, GraphQL mengurangi jumlah permintaan API dan meningkatkan performa aplikasi. GraphQL juga memungkinkan pengembang untuk membuat API yang lebih fleksibel dan mudah digunakan, yang dapat disesuaikan dengan kebutuhan klien yang berbeda. Dengan ekosistem yang terus berkembang dan komunitas yang aktif, GraphQL menjadi pilihan yang semakin populer di kalangan pengembang web modern yang mencari solusi API yang efisien, fleksibel, dan kuat.`,
  },
];

// Fungsi untuk mengambil artikel berdasarkan slug
export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return notFound(); // Redirect ke 404 jika slug tidak ditemukan
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(article.date).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • {article.category}
      </p>
      <div className="relative w-full h-80 my-5">
        <Image src={article.imageUrl} alt={article.title} fill className="object-cover rounded-lg" />
      </div>
      <p className="text-gray-500 text-lg">{article.excerpt}</p>
      <br />
      <p className="text-gray-700 text-lg text-justify">{article.content1}</p> <br />
      <p className="text-gray-700 text-lg text-justify">{article.content2}</p>
    </div>
  );
}
