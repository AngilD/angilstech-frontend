export default function OpenTalentOverview() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] bg-gradient-to-r from-green-800 to-gray-800 flex items-center">
        
        

        <div className="max-w-7xl mx-auto pl-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Open Talent Program
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-200">
            Learn, gain real-world experience, and get connected to opportunities through real projects.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium">
              Join Open Talent
            </button>
            <button className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-800">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 max-w-3xl">
            Open Talent is AnglisTech’s opportunity-driven program designed to help learners transition
            from learning to earning. It combines practical training, real-world projects, mentorship,
            and industry exposure.
          </p>

        {/* 
        <div className="max-w-7xl mx-auto px-2 text-white outline-2 outline-blue-400 ">
              test
        </div> */}

        </div>
      </section>

      {/* PURPOSE & VALUE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Purpose</h2>
            <p className="text-gray-700">
              To bridge the gap between learning and employment by providing hands-on experience
              and access to real opportunities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Value Proposition</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Learn by doing</li>
              <li>Build real experience</li>
              <li>Work with mentors</li>
              <li>Get visible to hiring partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT IS OPEN TALENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">What is Open Talent?</h2>
          <p className="text-gray-700 max-w-3xl">
            The Open Talent Program is a flexible talent pool made up of learners, interns,
            and early-career professionals. Participants work on real or simulated industry
            projects, receive mentorship, and build a strong professional portfolio.
          </p>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Who Can Join?</h2>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
            <li className="bg-white p-4 rounded shadow-sm">Students & Graduates</li>
            <li className="bg-white p-4 rounded shadow-sm">Career Switchers</li>
            <li className="bg-white p-4 rounded shadow-sm">Early-Career Professionals</li>
            <li className="bg-white p-4 rounded shadow-sm">Self-Taught Learners</li>
          </ul>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">What You Gain</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600 text-sm">
                Guidance from experienced professionals.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Real Projects</h3>
              <p className="text-gray-600 text-sm">
                Hands-on, portfolio-ready experience.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">
                Recognized proof of participation.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Opportunities</h3>
              <p className="text-gray-600 text-sm">
                Exposure to hiring and outsourcing partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Partner Companies</h2>
          <p className="text-gray-600 mb-8">
            We collaborate with organizations looking for skilled and reliable talent.
          </p>

          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section> */}

      {/* FINAL CTA */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build experience and unlock opportunities?
        </h2>
        <button className="mt-4 bg-white text-blue-800 px-8 py-3 rounded-md font-medium hover:bg-gray-100">
          Join Open Talent
        </button>
      </section>

    </main>
  );
}
