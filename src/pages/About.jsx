export default function About() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="relative w-full h-[40vh] bg-gradient-to-r from-blue-900 to-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About AngilsTech
          </h1>
          <p className="text-lg max-w-2xl text-gray-200">
            Building talent. Delivering opportunity. Powering the future of work.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              AngilsTech is a technology-driven talent development and outsourcing
              company focused on empowering students, graduates, and early-career
              professionals with real-world skills. We bridge the gap between learning
              and employment through practical training and real project exposure.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-400">Company Image / Illustration</span>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To equip emerging tech talent with practical skills, mentorship,
              and opportunities that lead to meaningful careers.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To become a leading platform for developing, connecting, and
              outsourcing skilled tech talent across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Growth & Learning",
              "Integrity & Trust",
              "Innovation",
              "Collaboration",
            ].map((value) => (
              <div
                key={value}
                className="p-6 bg-gray-50 rounded-lg text-center shadow-sm"
              >
                <h3 className="font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Train",
              "Mentor",
              "Build Projects",
              "Connect to Opportunities",
            ].map((step, index) => (
              <div
                key={step}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Us in Building the Future of Tech Talent
        </h2>
        <p className="mb-6 text-gray-200">
          Whether you are a learner, partner, or employer — AngilsTech is for you.
        </p>
      </section>

    </main>
  );
}
