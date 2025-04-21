import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

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
  {
    id: 3,
    title: "Web Server Pribadi dengan aaPanel",
    excerpt: "Membangun dan mengelola web server pribadi berbasis Ubuntu Desktop dengan kontrol panel aaPanel.",
    category: "Web Server & DevOps",
    imageUrl: "/images/aapanel.png",
    url: "https://www.youtube.com/@bDocs", // ganti dengan IP publik atau domain milikmu jika sudah tersedia
    date: "2025-04-20",
    slug: "web-server-aapanel-ubuntu",
    content1:
      "Proyek ini bertujuan untuk membangun web server pribadi menggunakan Ubuntu Desktop yang dikelola melalui koneksi SSH dari perangkat Windows. Dengan memanfaatkan aaPanel sebagai kontrol panel berbasis web, saya berhasil mengonfigurasi server, mengatur DNS, dan membuat website pertama yang berjalan di atas LAMP stack. aaPanel dipilih karena kemudahannya dalam mengelola server secara visual dan mendukung berbagai layanan seperti Apache/Nginx, MySQL, PHP, dan FTP. Proses instalasi dan konfigurasi dilakukan sepenuhnya melalui terminal SSH dan panel web aaPanel, menjadikan proyek ini sebagai langkah awal saya dalam mengelola server secara mandiri. Saat ini, web server masih bersifat lokal dan hanya dapat diakses oleh perangkat yang berada dalam satu jaringan yang sama.",
    content2:
      "Dalam proyek ini, saya juga belajar mengenai pengaturan firewall, manajemen domain dan subdomain, serta menginstal SSL untuk meningkatkan keamanan. Server ini menjadi fondasi bagi berbagai eksperimen web selanjutnya dan telah digunakan untuk menghosting beberapa proyek web pribadi. Melalui proyek ini, saya memperoleh pengalaman praktis tentang server-side configuration, deployment, dan pengelolaan hosting secara langsung tanpa menggunakan layanan hosting pihak ketiga. Hal ini memberikan saya pemahaman mendalam tentang bagaimana server bekerja serta pentingnya keamanan dan efisiensi dalam pengelolaan web server. Seluruh proses dan hasil proyek ini juga telah saya dokumentasikan dalam bentuk video yang diunggah ke channel YouTube pribadi saya sebagai referensi dan pembelajaran lebih lanjut.",
  },
  {
    id: 4,
    title: "Deploy API Gratis di Render dengan Docker",
    excerpt: "Membangun dan mendistribusikan API service gratis menggunakan Docker container di platform Render.",
    category: "API & Deployment",
    imageUrl: "/images/render.png",
    url: "https://render.com",
    date: "2025-04-22",
    slug: "deploy-api-docker-render",
    content1:
      "Proyek ini merupakan implementasi dari layanan API sederhana yang dibangun dengan Python dan dideploy secara gratis ke platform Render menggunakan Docker. Untuk dapat melakukan deployment ini, seluruh proyek terlebih dahulu di-*containerize* menggunakan Docker agar dapat dijalankan secara konsisten di berbagai lingkungan. Render memungkinkan saya untuk hanya melakukan pull dari image Docker yang telah dibuat, lalu menjalankannya sebagai web service tanpa perlu konfigurasi server manual. Ini menjadikan proses deploy lebih cepat, praktis, dan efisien.",
    content2:
      "Dengan pendekatan containerized deployment ini, saya memperoleh pengalaman langsung dalam mengemas aplikasi ke dalam Docker image, menulis file `Dockerfile`, dan mendorong image tersebut ke Docker Hub. Setelah itu, Render secara otomatis menarik image tersebut dan menjalankannya sebagai service aktif yang dapat diakses publik. Ini sangat cocok untuk keperluan testing API, prototipe aplikasi backend, atau proyek portofolio pribadi. Selain itu, proses ini memberikan pemahaman mendalam tentang pentingnya environment yang konsisten dalam pengembangan perangkat lunak modern.",
  },
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((a) => a.slug === params.slug);
  if (!project) {
    return notFound(); // Redirect ke 404 jika slug tidak ditemukan
  }
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(project.date).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • {project.category}
      </p>
      <div className="relative w-full h-80 my-5">
        <Image src={project.imageUrl} alt={project.title} fill className="object-cover rounded-lg" />
      </div>
      <p className="text-gray-500 text-lg">{project.excerpt}</p>
      <br />
      <p className="text-gray-700 text-lg text-justify">{project.content1}</p> <br />
      <p className="text-gray-700 text-lg text-justify">{project.url}</p>
      <br />
      <p className="text-gray-700 text-lg text-justify">{project.content2}</p>
    </div>
  );
}
