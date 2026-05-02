import HeroSlider from "../components/HeroSlider";
export default function Home() {
  return (
    <main className="w-full">

      {/* ================= HERO =================
      <HeroSlider /> */}

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Talent Development</h3>
              <p className="text-sm text-gray-600">
                Industry-focused training for students and early-career professionals.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Open Talent Program</h3>
              <p className="text-sm text-gray-600">
                Learn by doing, build real projects, and gain mentorship.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Job Outsourcing</h3>
              <p className="text-sm text-gray-600">
                We deliver skilled talent for real business needs.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Tech Clubs</h3>
              <p className="text-sm text-gray-600">
                Student communities guided by industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAINING TRACKS PREVIEW ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Training Tracks
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "DevOps & Cloud Engineering",
              "Backend Development",
              "Frontend Engineering",
              "QA & Software Testing",
            ].map((track) => (
              <div key={track} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">{track}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/open-talent/tracks"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
            >
              View All Tracks
            </a>
          </div>
        </div>
      </section>

      {/* ================= OPEN TALENT HIGHLIGHT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Open Talent Program
            </h2>
            <p className="text-gray-600 mb-6">
              A hands-on program that bridges the gap between learning and employment.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Real-world projects</li>
              <li>✔ Mentorship from experts</li>
              <li>✔ Portfolio & certification</li>
              <li>✔ Access to outsourcing opportunities</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <a
              href="open-talent/overview"
              className="bg-blue-600 text-white px-10 py-4 rounded-md hover:bg-blue-700"
            >
              Explore Open Talent
            </a>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Tech Career?
        </h2>
        <p className="mb-6 text-gray-200">
          Join our programs and start building real-world experience today.
        </p>
        <a
          href="pages/IndividualReg"
          className="inline-block bg-white text-blue-800 px-10 py-4 rounded-md font-medium hover:bg-gray-100"
        >
          Get Started
        </a>
      </section>

    </main>
  );
}
