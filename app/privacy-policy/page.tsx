import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Kebijakan Privasi Wricom - Perlindungan Data dan Informasi Pribadi Anda
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              Terakhir diperbarui: {new Date().getFullYear()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Pendahuluan</h2>
              <p>
                Wricom ("kami", "kami", atau "Perusahaan kami") mengoperasikan situs web https://wricom.digital (selanjutnya disebut sebagai "Layanan").
              </p>
              <p>
                Halaman Kebijakan Privasi kami memberi tahu Anda tentang kebijakan dan praktik kami mengenai pengumpulan, penggunaan, dan pengungkapan data pribadi Anda ketika Anda menggunakan Layanan kami dan opsi yang Anda miliki yang terkait dengan data tersebut.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Pengumpulan dan Penggunaan Data</h2>
              <p>Kami mengumpulkan berbagai informasi untuk berbagai tujuan guna memberikan layanan yang lebih baik kepada Anda.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">Jenis Data yang Dikumpulkan:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Data Pribadi: Nama, alamat email, nomor telepon, alamat fisik</li>
                <li>Data Perusahaan: Nama perusahaan, posisi, industri</li>
                <li>Data Penggunaan: Informasi tentang bagaimana Anda menggunakan Layanan kami</li>
                <li>Data Teknis: Alamat IP, tipe browser, sistem operasi</li>
                <li>Informasi Project: Detail tentang project website yang Anda butuhkan</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Penggunaan Data</h2>
              <p>Kami menggunakan data yang dikumpulkan untuk berbagai tujuan:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Memberikan, memelihara, dan meningkatkan Layanan kami</li>
                <li>Mengirimkan informasi teknis dan pembaruan keamanan</li>
                <li>Merespons pertanyaan dan permintaan Anda</li>
                <li>Mengirimkan komunikasi pemasaran (dengan persetujuan Anda)</li>
                <li>Memonitor dan menganalisis tren, penggunaan, dan aktivitas</li>
                <li>Mendeteksi dan mencegah masalah teknis dan keamanan</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Keamanan Data</h2>
              <p>
                Keamanan data Anda penting bagi kami, tetapi perlu diingat bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara-cara yang dapat diterima secara komersial untuk melindungi data pribadi Anda, kami tidak dapat menjamin keamanan absolutnya.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Retensi Data</h2>
              <p>
                Kami akan menyimpan data pribadi Anda hanya selama diperlukan untuk tujuan-tujuan yang dinyatakan dalam Kebijakan Privasi ini. Kami akan menyimpan dan menggunakan data pribadi Anda sejauh diperlukan untuk mematuhi kewajiban hukum kami.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Berbagi Data</h2>
              <p>
                Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali sebagaimana diperlukan oleh hukum atau untuk melindungi hak, privasi, keselamatan, atau properti kami.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookie dan Teknologi Pelacakan</h2>
              <p>
                Kami menggunakan cookie dan teknologi pelacakan serupa untuk melacak aktivitas di Layanan kami dan menyimpan informasi tertentu. Anda dapat menginstruksikan browser Anda untuk menolak semua cookie atau memberi tahu Anda ketika cookie dikirimkan.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Hak Anda</h2>
              <p>Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mengakses data pribadi Anda</li>
                <li>Meminta koreksi atau penghapusan data Anda</li>
                <li>Menolak pemrosesan data Anda</li>
                <li>Membatasi penggunaan data Anda</li>
                <li>Meminta portabilitas data Anda</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Kontak Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p><strong>Email:</strong> wricom.digital@gmail.com</p>
                <p><strong>WhatsApp:</strong> +62 889-8915-3569</p>
                <p><strong>Alamat:</strong> Indonesia</p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Perubahan Kebijakan</h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi yang baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui".
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
