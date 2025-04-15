import React from "react";
import CardProject from "../components/CardProject";

const projects = [
  {
    id: 1,
    title: "Dummy Project List API",
    excerpt: "Dummy project API untuk menampilkan list project dengan bahasa Python framework Flask",
    category: "API",
    imageUrl: "/images/flask.png",
    url: "https://www.postman.com/joint-operations-operator-80473553/flask-api/request/nrb3hyr/try-my-api?action=share&creator=30303941&ctx=documentation",
    date: "2025-03-01",
    slug: "dummy-project-list-API",
    content1:
      "API ini adalah layanan berbasis Flask yang dikembangkan menggunakan bahasa pemrograman Python. Layanan ini dirancang untuk memberikan kemudahan dalam mengakses data dan informasi secara terstruktur dan efisien melalui endpoint-endpoint yang sudah disediakan. Dengan menggunakan teknologi Flask yang ringan namun kuat, API ini menawarkan respons cepat, skalabilitas, dan kemudahan integrasi ke berbagai aplikasi dan sistem lainnya. Cocok digunakan untuk berbagai kebutuhan pengembangan aplikasi berbasis web atau mobile, memungkinkan para pengembang untuk memanfaatkan data yang ada dengan cara yang lebih fleksibel dan mudah diakses. Anda bisa mencobanya melalui link berikut",
    content2:
      "Dengan mengakses alamat API yang telah disediakan, pengguna dapat dengan mudah memperoleh seluruh daftar proyek yang tersedia dalam sistem. API ini memungkinkan pengguna untuk melihat informasi mendetail terkait setiap proyek, termasuk status, deskripsi, dan data relevan lainnya. Akses yang cepat dan terstruktur mempermudah proses pencarian dan pengelolaan data proyek, serta memungkinkan pengguna untuk melakukan integrasi data dengan sistem mereka sendiri. Fungsi ini sangat berguna untuk pengelola proyek, pengembang, atau siapa saja yang membutuhkan data proyek yang terorganisir dan dapat diakses dengan cepat dari berbagai perangkat.",
  },
  {
    id: 2,
    title: "Sistem Peminjaman Buku Mandiri",
    excerpt: "Sistem berbasis Laravel dengan fitur barcode dan QR Code untuk ruang baca Teknik Komputer",
    category: "Web Development",
    imageUrl: "/images/rbc.png",
    url: "https://ruangbaca.ce.undip.ac.id/",
    date: "2025-02-10",
    slug: "sistem-peminjaman-buku-mandiri",
    content1:
      "Sistem ini dikembangkan menggunakan framework Laravel dengan AdminLTE sebagai template dashboard admin, dirancang untuk mendukung proses peminjaman dan pengembalian buku di ruang baca Teknik Komputer secara mandiri. Dengan adanya fitur autentikasi berbasis peran, sistem ini memungkinkan mahasiswa untuk meminjam buku secara mandiri menggunakan QR Code, sementara admin bertugas mengelola inventaris buku, melihat daftar peminjaman, serta melakukan verifikasi data pengguna. Laravel digunakan sebagai back-end utama karena kemampuannya dalam mengelola database secara efisien, sementara AdminLTE dipilih untuk memberikan tampilan dashboard yang intuitif dan mudah digunakan oleh admin. Database sistem ini menggunakan MySQL untuk menyimpan informasi buku, riwayat peminjaman, dan data pengguna, sehingga dapat diakses dengan cepat dan terorganisir. Anda bisa mengunjunginya melalui link berikut",
    content2:
      "Fitur utama dari sistem ini adalah peminjaman buku berbasis QR Code, yang mempermudah mahasiswa dalam mengakses buku tanpa perlu interaksi langsung dengan petugas. Setiap buku dalam sistem dilengkapi dengan kode QR yang dapat dipindai oleh mahasiswa menggunakan aplikasi atau scanner yang tersedia di ruang baca. Ketika QR Code dipindai, sistem akan secara otomatis mencatat peminjaman buku berdasarkan identitas mahasiswa yang sudah terautentikasi. Selain itu, sistem juga mencatat batas waktu peminjaman dan memberikan notifikasi jika ada keterlambatan dalam pengembalian buku. Dengan adanya fitur ini, proses peminjaman menjadi lebih cepat, transparan, dan mengurangi kemungkinan kehilangan data peminjaman. Sistem juga memiliki fitur pencatatan statistik peminjaman untuk membantu admin dalam menganalisis tren penggunaan buku dan mengoptimalkan pengelolaan koleksi buku di ruang baca Teknik Komputer.",
  },
];

export default function Page() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center"></h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <CardProject key={project.id} title={project.title} excerpt={project.excerpt} slug={project.slug} imageUrl={project.imageUrl} date={project.date} category={project.category} />
        ))}
      </div>
    </div>
  );
}
