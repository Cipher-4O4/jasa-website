import { motion } from 'framer-motion'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Syarat dan Ketentuan Penggunaan Layanan Wricom
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              Terakhir diperbarui: {new Date().getFullYear()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Penerimaan Syarat</h2>
              <p>
                Dengan mengakses dan menggunakan situs web Wricom (https://wricom.digital) dan layanan kami, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan yang diuraikan di sini. Jika Anda tidak setuju dengan salah satu bagian dari syarat ini, silakan jangan gunakan Layanan kami.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Penggunaan Layanan</h2>
              <p>
                Anda setuju untuk menggunakan Layanan kami hanya untuk tujuan-tujuan yang sah dan dengan cara yang tidak melanggar hak orang lain atau membatasi atau melarang penggunaan Layanan kami oleh orang lain. Perilaku yang dilarang mencakup mengganggu aliran dialog biasa dalam Layanan kami, melecehkan orang lain, pengiriman konten yang kasar, membagikan spam pribadi, atau konten yang tidak jelas dan mengganggu.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Konten Pengguna</h2>
              <p>
                Jika Anda mengirimkan, memposting, atau menampilkan konten melalui Layanan kami, Anda memberikan kepada kami lisensi tanpa batas, bebas royalti, yang dapat dilisensikan ulang, tidak dapat ditarik kembali, dan dapat dilisensikan (termasuk hak untuk lari di seluruh dunia) untuk menggunakan, menyalin, mereproduksi, memproses, mengadaptasi, memodifikasi, mempublikasikan, mengirimkan, menampilkan, dan mendistribusikan konten tersebut dalam media atau cara distribusi apa pun (baik sekarang dikenal atau nanti dikembangkan).
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Kekayaan Intelektual</h2>
              <p>
                Layanan kami dan semua konten yang disertakan di dalamnya, termasuk tetapi tidak terbatas pada teks, grafik, logo, citra, dan perangkat lunak, adalah kepemilikan Wricom atau penyedia konten kami dan dilindungi oleh hukum hak cipta internasional. Anda dapat melihat dan mencetak halaman dari Layanan kami untuk penggunaan pribadi Anda, dengan ketentuan bahwa Anda tidak menghapus atau mengubah pemberitahuan hak cipta atau kepemilikan apa pun.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Batasan Tanggung Jawab</h2>
              <p>
                Layanan kami disediakan atas dasar "sebagaimana adanya" dan "sebagaimana tersedia". Wricom tidak membuat pernyataan atau jaminan dari segala jenis, baik tersurat maupun tersirat, mengenai pengoperasian Layanan kami atau informasi, konten, atau materi yang disertakan dalam Layanan kami. Anda secara tegas setuju bahwa penggunaan Layanan kami adalah risiko Anda sendiri.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Keterbatasan Tanggung Jawab</h2>
              <p>
                Dalam hal apa pun, Wricom, afiliasi, agen, atau penyuplai kontennya tidak akan bertanggung jawab atas segala kerusakan (termasuk, tanpa batasan, kerusakan untuk kehilangan keuntungan, kehilangan data, atau gangguan bisnis) yang timbul dari atau sehubungan dengan penggunaan atau ketidakmampuan Anda menggunakan Layanan ini, bahkan jika Wricom telah diberitahu tentang kemungkinan kerusakan tersebut.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Tautan ke Situs Pihak Ketiga</h2>
              <p>
                Layanan kami dapat berisi tautan ke situs web pihak ketiga. Kami tidak memiliki kontrol atas situs web pihak ketiga ini dan tidak bertanggung jawab atas konten mereka. Penggunaan situs web pihak ketiga oleh Anda tunduk pada syarat dan ketentuan pihak ketiga tersebut.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Penghentian</h2>
              <p>
                Kami dapat menghentikan akses Anda ke Layanan kami tanpa pemberitahuan dan alasan apa pun, termasuk jika Anda melanggar Syarat dan Ketentuan ini.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Perubahan Layanan</h2>
              <p>
                Wricom berhak memodifikasi atau menghentikan Layanan kami atau bagian darinya kapan saja, dengan atau tanpa pemberitahuan kepada Anda. Kami tidak akan bertanggung jawab kepada Anda atau pihak ketiga apa pun karena modifikasi, penangguhan, atau penghentian Layanan kami.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Hukum yang Berlaku</h2>
              <p>
                Syarat dan Ketentuan ini dan penggunaan Anda atas Layanan kami akan diatur dan ditafsirkan sesuai dengan hukum Indonesia, dan Anda secara tidak dapat ditarik kembali tunduk pada yurisdiksi eksklusif dari pengadilan yang terletak di Indonesia.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Pembayaran dan Layanan</h2>
              <p>
                Untuk layanan berbayar yang kami tawarkan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Anda setuju untuk memberikan informasi pembayaran yang akurat dan terkini</li>
                <li>Kami berhak untuk memperbarui informasi pembayaran Anda</li>
                <li>Biaya pembayaran tidak dapat dikembalikan kecuali dinyatakan lain dalam perjanjian spesifik</li>
                <li>Kami berhak mengubah harga kapan saja dengan pemberitahuan 30 hari</li>
              </ul>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Timeline Project</h2>
              <p>
                Timeline project akan disepakati bersama sebelum memulai pekerjaan. Perubahan scope project setelah fase pengembangan dimulai dapat mempengaruhi timeline dan biaya. Kami akan memberitahu Anda tentang perubahan ini secara tertulis.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Kontak Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p><strong>Email:</strong> wricom.digital@gmail.com</p>
                <p><strong>WhatsApp:</strong> +62 889-8915-3569</p>
                <p><strong>Alamat:</strong> Indonesia</p>
              </div>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Perubahan Syarat</h2>
              <p>
                Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Penggunaan berkelanjutan atas Layanan kami setelah perubahan berarti Anda menerima perubahan tersebut.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
