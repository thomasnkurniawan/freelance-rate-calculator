export default function ArticleFreelanceRateGuide() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-neutral-900">
      {/* Title */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Cara Menghitung Rate Freelance yang Ideal (Per Jam, Harian, dan Per
          Project)
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          Panduan lengkap menentukan harga freelance biar gak underprice, cocok
          untuk web developer, frontend developer, UI engineer, dan freelancer
          kreatif lainnya.
        </p>
      </header>

      {/* Intro */}
      <section className="space-y-4">
        <p>
          Menentukan <strong>rate freelance</strong> itu salah satu hal paling
          bikin pusing. Kadang takut kemahalan, kadang takut kemurahan. Ujungnya
          banyak freelancer akhirnya cuma ngarang angka, berharap client setuju.
        </p>
        <p>
          Masalahnya, kalau kamu salah pasang harga, dampaknya bukan cuma rugi
          uang, tapi juga rugi energi. Revisi numpuk, stress, dan kamu kehilangan
          kesempatan untuk ambil project lain yang lebih sehat.
        </p>
        <p>
          Di artikel ini, kita bahas cara menghitung{" "}
          <strong>harga freelance per project</strong> dengan metode yang simpel,
          tapi realistis dan bisa dipakai untuk negosiasi.
        </p>
      </section>

      {/* Why calculate */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Kenapa Rate Freelance Harus Dihitung (Bukan Tebak-tebakan)?
        </h2>
        <p>
          Freelancer bukan cuma dibayar karena “ngerjain”. Kamu dibayar untuk
          skill, pengalaman, kemampuan menyelesaikan masalah, dan kemampuan
          deliver sesuai deadline.
        </p>
        <p>
          Makanya, project yang kelihatan mirip bisa punya harga berbeda jauh.
          Landing page sederhana beda banget dengan landing page yang ada
          animasi, integrasi API, dan revisi tak terbatas.
        </p>
      </section>

      {/* Factors */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Faktor yang Menentukan Harga Freelance
        </h2>
        <p>
          Dalam dunia nyata, ada beberapa faktor utama yang biasanya menentukan{" "}
          <strong>freelance pricing</strong>:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-neutral-800">
          <li>
            <strong>Experience Level</strong> (Junior / Mid / Senior)
          </li>
          <li>
            <strong>Difficulty</strong> (kompleksitas UI, logic, integrasi, dsb)
          </li>
          <li>
            <strong>Deadline</strong> (normal vs fast vs rush)
          </li>
          <li>
            <strong>Revision Level</strong> (berapa banyak revisi yang biasanya
            terjadi)
          </li>
          <li>
            <strong>Risk Buffer</strong> (scope creep, bug random, perubahan
            requirement)
          </li>
        </ul>
      </section>

      {/* Formula */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Rumus Menghitung Rate Freelance Per Project (Simple & Realistic)
        </h2>

        <p>
          Cara paling gampang adalah mulai dari base rate berdasarkan experience,
          lalu pakai multiplier untuk menyesuaikan tingkat kesulitan.
        </p>

        <h3 className="text-xl font-semibold">
          Step 1 — Tentukan Base Rate dari Experience
        </h3>
        <p>
          Base rate adalah rate normal kamu untuk project standar. Contoh base
          rate yang cukup umum di Indonesia:
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Junior</strong>: Rp 100.000 / jam
          </li>
          <li>
            <strong>Mid</strong>: Rp 200.000 / jam
          </li>
          <li>
            <strong>Senior</strong>: Rp 350.000 / jam
          </li>
        </ul>

        <p className="text-sm text-neutral-600">
          Catatan: angka ini bukan mutlak. Kamu bisa adjust sesuai market dan
          value kamu.
        </p>

        <h3 className="text-xl font-semibold">
          Step 2 — Hitung Total Jam Kerja Project
        </h3>
        <p>
          Kalau kamu estimasi kerja berdasarkan hari, kamu bisa ubah jadi jam:
        </p>

        <pre className="overflow-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
          {`totalHours = projectDays * hoursPerDay`}
        </pre>

        <p>
          Contoh: 10 hari × 4 jam/hari = <strong>40 jam</strong>.
        </p>

        <h3 className="text-xl font-semibold">
          Step 3 — Apply Multiplier Difficulty
        </h3>
        <p>
          Difficulty multiplier dipakai untuk menyesuaikan kompleksitas project.
          Contoh multiplier:
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            Easy: <strong>x1.0</strong>
          </li>
          <li>
            Medium: <strong>x1.2</strong>
          </li>
          <li>
            Hard: <strong>x1.5</strong>
          </li>
          <li>
            Very Hard: <strong>x2.0</strong>
          </li>
        </ul>

        <h3 className="text-xl font-semibold">
          Step 4 — Apply Multiplier Deadline
        </h3>
        <p>
          Project yang butuh cepat harus lebih mahal karena kamu mengorbankan
          waktu dan schedule.
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            Normal: <strong>x1.0</strong>
          </li>
          <li>
            Fast: <strong>x1.2</strong>
          </li>
          <li>
            Rush: <strong>x1.5</strong>
          </li>
        </ul>

        <h3 className="text-xl font-semibold">
          Step 5 — Apply Multiplier Revision Level
        </h3>
        <p>
          Revisi adalah penyebab utama project freelance jadi kacau. Makanya,
          revisi wajib dihitung.
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            Low: <strong>x1.0</strong>
          </li>
          <li>
            Normal: <strong>x1.2</strong>
          </li>
          <li>
            High: <strong>x1.5</strong>
          </li>
        </ul>

        <h3 className="text-xl font-semibold">Step 6 — Tambahkan Risk Buffer</h3>
        <p>
          Risk buffer adalah safety margin untuk scope creep, perubahan
          requirement, dan bug random.
        </p>
        <p>
          Biasanya freelancer pakai buffer <strong>10% – 30%</strong>.
        </p>

        <pre className="overflow-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
          {`finalPrice = subtotal * (1 + bufferPercent/100)`}
        </pre>
      </section>

      {/* Full formula */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Formula Lengkap Freelance Rate Calculator
        </h2>

        <pre className="overflow-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
          {`baseHourlyRate = experienceRate

totalHours = projectDays * hoursPerDay

finalHourlyRate =
  baseHourlyRate *
  difficultyMultiplier *
  deadlineMultiplier *
  revisionMultiplier

subtotal = finalHourlyRate * totalHours

recommendedPrice = subtotal * (1 + bufferPercent/100)`}
        </pre>
      </section>

      {/* Examples */}
      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">
          Contoh Perhitungan Harga Freelance Per Project
        </h2>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h3 className="text-lg font-semibold">
            Contoh 1: Project Easy, Deadline Normal
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Mid-level developer, base rate Rp 200k/jam.
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            <li>Duration: 5 hari</li>
            <li>Hours/day: 4 jam</li>
            <li>Difficulty: Easy (x1.0)</li>
            <li>Deadline: Normal (x1.0)</li>
            <li>Revision: Low (x1.0)</li>
            <li>Buffer: 10%</li>
          </ul>

          <p className="mt-4 text-sm">
            Total hours = 5 × 4 = <strong>20 jam</strong>
          </p>
          <p className="text-sm">
            Subtotal = 200k × 20 = <strong>Rp 4.000.000</strong>
          </p>
          <p className="text-sm">
            Final = 4.000.000 × 1.1 ={" "}
            <strong>Rp 4.400.000</strong>
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h3 className="text-lg font-semibold">
            Contoh 2: Project Hard + Fast Deadline
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Mid-level developer, base rate Rp 200k/jam.
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            <li>Duration: 10 hari</li>
            <li>Hours/day: 5 jam</li>
            <li>Difficulty: Hard (x1.5)</li>
            <li>Deadline: Fast (x1.2)</li>
            <li>Revision: Normal (x1.2)</li>
            <li>Buffer: 15%</li>
          </ul>

          <p className="mt-4 text-sm">
            Total hours = 10 × 5 = <strong>50 jam</strong>
          </p>
          <p className="text-sm">
            Final hourly = 200k × 1.5 × 1.2 × 1.2 ={" "}
            <strong>Rp 432.000/jam</strong>
          </p>
          <p className="text-sm">
            Subtotal = 432k × 50 = <strong>Rp 21.600.000</strong>
          </p>
          <p className="text-sm">
            Final = 21.600.000 × 1.15 ={" "}
            <strong>Rp 24.840.000</strong>
          </p>
        </div>
      </section>

      {/* Negotiation tips */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Tips Negosiasi Harga Freelance (Biar Gak Ditawar Terus)
        </h2>

        <p>
          Salah satu strategi paling efektif adalah jangan kasih 1 angka doang.
          Kasih 3 paket pricing:
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Budget</strong>: scope minimum, revisi terbatas
          </li>
          <li>
            <strong>Standard</strong>: recommended, revisi normal
          </li>
          <li>
            <strong>Premium</strong>: priority, revisi lebih fleksibel
          </li>
        </ul>

        <p>
          Dengan cara ini, client akan fokus memilih paket, bukan menawar angka.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold">
          Coba Freelance Rate Calculator Gratis
        </h2>
        <p className="mt-2 text-sm text-neutral-700">
          Kamu bisa langsung hitung harga freelance per project dengan kalkulator
          gratis di halaman utama.
        </p>

        <a
          href="/"
          className="mt-4 inline-block rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Open Calculator
        </a>
      </section>

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          FAQ: Pertanyaan Umum Tentang Rate Freelance
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Berapa rate freelance per jam yang ideal?
            </h3>
            <p className="text-sm text-neutral-700">
              Tergantung skill dan market. Tapi guideline umum: Junior 100k/jam,
              Mid 200k/jam, Senior 350k/jam.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Lebih bagus charge per jam atau per project?
            </h3>
            <p className="text-sm text-neutral-700">
              Untuk kerja profesional, lebih bagus per project karena client bayar
              output, bukan jam kerja.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Kenapa harus pakai buffer?</h3>
            <p className="text-sm text-neutral-700">
              Karena hampir semua project freelance ada perubahan kecil, revisi,
              atau request tambahan yang memakan waktu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Apa bedanya difficulty dan revision multiplier?
            </h3>
            <p className="text-sm text-neutral-700">
              Difficulty fokus ke kompleksitas teknis. Revision fokus ke potensi
              perubahan dan komunikasi bolak-balik.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        <p>
          Article updated for 2026. Built for freelancers who want pricing that
          makes sense.
        </p>
      </footer>
    </article>
  );
}
