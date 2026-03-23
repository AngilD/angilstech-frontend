export default function Clubs() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="relative w-full h-[40vh] bg-gradient-to-r from-green-800 to-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AngilsTech Clubs & Competitions
          </h1>
          <p className="text-lg max-w-2xl text-gray-200">
            Empowering young innovators through learning, collaboration, and competition.
          </p>
        </div>
      </section>

      {/* CLUB OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Tech Clubs</h2>
          <p className="text-gray-700 max-w-3xl">
            AngilsTech Clubs are learning communities established in schools,
            colleges, and universities. Members receive mentorship, training
            resources, and access to innovation challenges.
          </p>
        </div>
      </section>

      {/* ANNUAL COMPETITION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Annual Innovation Challenge
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Under 10 */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Junior Innovators
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Under 10 years
              </p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✔ Logic & creativity challenges</li>
                <li>✔ Basic coding & robotics</li>
                <li>✔ Fun innovation tasks</li>
              </ul>
            </div>

            {/* Under 18 */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Young Creators
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Under 18 years
              </p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✔ Web & mobile projects</li>
                <li>✔ Problem-solving challenges</li>
                <li>✔ UI & automation ideas</li>
              </ul>
            </div>

            {/* Under 25 */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Future Professionals
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Under 25 years
              </p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✔ Real-world tech solutions</li>
                <li>✔ DevOps, cloud & data</li>
                <li>✔ Startup & enterprise ideas</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bring AngilsTech Clubs to Your School
        </h2>
        <p className="mb-6 text-gray-200">
          Register your institution and empower students through innovation.
        </p>
        <button className="bg-white text-green-800 px-10 py-4 rounded-md font-medium hover:bg-gray-100">
          Register Your School
        </button>
      </section>

    </main>
  );
}
