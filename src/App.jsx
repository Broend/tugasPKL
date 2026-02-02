import React, { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

// --- Komponen Navbar ---
const Navbar = ({ setPage, currentPage }) => (
  <nav className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Shield className="w-6 h-6" />
        <h1 className="font-bold text-xl">MediSmart AI</h1>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setPage("home")}
          className={`px-4 py-2 rounded-lg transition-all ${
            currentPage === "home"
              ? "bg-white text-emerald-700 font-semibold"
              : "hover:bg-emerald-500"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setPage("about")}
          className={`px-4 py-2 rounded-lg transition-all ${
            currentPage === "about"
              ? "bg-white text-emerald-700 font-semibold"
              : "hover:bg-emerald-500"
          }`}
        >
          About
        </button>
      </div>
    </div>
  </nav>
);

// --- Halaman Home ---
const Home = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const doctorSchedule = [
    {
      name: "dr. Andi",
      specialty: "Poli Anak",
      time: "08.00 - 12.00",
      available: true,
    },
    {
      name: "dr. Siti",
      specialty: "Poli Penyakit Dalam",
      time: "13.00 - 16.00",
      available: true,
    },
    {
      name: "dr. Budi",
      specialty: "Poli Gigi",
      time: "09.00 - 14.00",
      available: false,
    },
  ];

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chatbot 24/7",
      desc: "Informasi instan untuk pasien kapan saja",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pengingat Obat",
      desc: "Notifikasi otomatis jadwal minum obat",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Auto-Summary",
      desc: "Ringkasan laporan medis otomatis",
    },
  ];

  const handleChat = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const knowledgeBase = [
        {
          key: "jam besuk",
          ans: "Jam besuk di RS kami adalah pukul 16.00-18.00 WIB.",
        },
        {
          key: "daftar",
          ans: "Pendaftaran bisa dilakukan online melalui WhatsApp atau mesin mandiri di lobby.",
        },
        {
          key: "lokasi poli",
          ans: "Semua poli spesialis terletak di Lantai 2 Gedung B.",
        },
        {
          key: "jadwal",
          ans: "Jadwal dokter tersedia di tabel bawah atau melalui fitur chatbot ini.",
        },
      ];

      const found = knowledgeBase.find((item) =>
        question.toLowerCase().includes(item.key)
      );
      setResponse(
        found
          ? found.ans
          : "Maaf, saya belum memahami pertanyaan itu. Silakan hubungi pusat bantuan kami."
      );
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            AI-Powered Healthcare Solution
          </div>
          <h2 className="text-5xl font-extrabold text-emerald-900 mb-6 leading-tight">
            AI Assistant Rumah Sakit
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-8">
            Mengatasi penumpukan antrean informasi. Pasien mendapatkan akses
            instan ke jadwal dokter dan prosedur pendaftaran tanpa perlu
            mengantre.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("chatbot")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Coba Chatbot Sekarang
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-emerald-900 mb-12">
            Solusi AI Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-emerald-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Schedule */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-8 h-8 text-emerald-600 mr-3" />
            <h3 className="text-3xl font-bold text-emerald-900">
              Jadwal Dokter Hari Ini
            </h3>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">
                    Nama Dokter
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Spesialisasi
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Jam Praktik
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {doctorSchedule.map((d, i) => (
                  <tr key={i} className="hover:bg-emerald-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">
                      {d.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600">{d.specialty}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {d.time}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          d.available
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {d.available ? "Tersedia" : "Tidak Tersedia"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Demo Chatbot */}
      <section
        id="chatbot"
        className="py-16 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 text-white">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">Demo AI Chatbot</h3>
            <p className="text-emerald-100">
              Tanyakan apa saja tentang layanan rumah sakit
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <form onSubmit={handleChat} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Tanyakan jam besuk, lokasi poli, atau jadwal dokter..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isLoading ? "Memproses..." : "Kirim Pertanyaan"}
              </button>
            </form>

            {response && (
              <div className="mt-6 p-6 bg-gradient-to-br from-emerald-50 to-blue-50 border-l-4 border-emerald-500 rounded-xl animate-fadeIn">
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{response}</p>
                </div>
              </div>
            )}

            {!response && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Jam besuk",
                  "Cara daftar",
                  "Lokasi poli",
                  "Jadwal dokter",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuestion(suggestion)}
                    className="px-4 py-2 bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 rounded-lg text-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Halaman About ---
const About = () => {
  const anggota = [
    {
      nomor: "1",
      nama: "Silvia putri Ramadyanti",
    },
  ];
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
          Project PKL 2024
        </div>
        <h2 className="text-4xl font-bold text-emerald-900 mb-4">
          Tentang Project PKL
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Inovasi AI untuk meningkatkan efisiensi layanan kesehatan
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Users className="w-6 h-6 text-emerald-600 mr-3" />
          <h3 className="text-2xl font-bold text-emerald-800">
            Identitas Kelompok
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {anggota.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl mb-4">
                {item.nomor}
              </div>
              <p className="font-bold text-xl text-emerald-700 mb-1">
                {item.nama}
              </p>
              {/* <p className="text-sm text-gray-500 italic">AI Product Manager</p> */}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h4 className="font-bold text-emerald-800 text-xl mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Analisis Masalah
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Di tempat PKL, kami mengamati bahwa beban kerja administratif
            petugas front-office sangat tinggi akibat pertanyaan berulang. Hal
            ini menyebabkan antrean fisik memanjang dan ketidakpuasan pasien
            karena waktu tunggu yang lama hanya untuk mendapatkan informasi
            dasar.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border border-emerald-100">
          <h4 className="font-bold text-emerald-800 text-xl mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Dampak Solusi AI
          </h4>
          <p className="text-gray-700 mb-4">
            Dengan menerapkan sistem berbasis AI, rumah sakit dapat:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Meningkatkan Efisiensi",
                desc: "Mengurangi 60-70% volume pertanyaan rutin ke petugas.",
              },
              {
                title: "Kecepatan Akses",
                desc: "Pasien mendapatkan jawaban secara real-time tanpa perlu mengantre.",
              },
              {
                title: "Akurasi Data",
                desc: "Mengurangi risiko salah penyampaian jadwal dokter karena data terintegrasi secara digital.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 bg-white rounded-xl">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold mr-4 flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App Wrapper ---
export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar setPage={setPage} currentPage={page} />
      {page === "home" ? <Home /> : <About />}
      <footer className="py-8 text-center bg-gradient-to-r from-emerald-800 to-emerald-900 text-white">
        <p className="text-sm mb-2">&copy; 2024 Project PKL AI Assistant</p>
        <p className="text-xs text-emerald-200">
          Dibuat dengan dedikasi untuk efisiensi kesehatan
        </p>
      </footer>
    </div>
  );
}
