export default function OpenTalentTracks() {
  return (
    <main className="w-full">
      
      {/* HERO SECTION */}
      <section className="h-[40vh] bg-gradient-to-r from-blue-800 to-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Open Talent Tracks
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Structured learning paths designed to help you gain real skills,
            real experience, and real opportunities.
          </p>
        </div>
      </section>
      
      {/* TRACKS SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-10">

          {/* 1. DevOps & Cloud Engineering */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3">
              DevOps & Cloud Engineering
            </h2>

            <p className="text-gray-700 mb-4">
              Learn how to deploy, automate, monitor, and scale real-world systems.
            </p>

            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Linux & Networking</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD (GitHub Actions, Jenkins)</li>
              <li>AWS / Azure</li>
              <li>Monitoring & Security basics</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                Internship-ready
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                Outsourcing-ready
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                Certification support
              </span>
            </div>
          </div>

          {/* 2. Backend Development */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3">
              Backend Development
            </h2>

            <p className="text-gray-700 mb-4">
              Build scalable APIs and backend systems used in real products.
            </p>

            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Node.js / Java / Python</li>
              <li>REST & GraphQL APIs</li>
              <li>Databases (PostgreSQL, MongoDB)</li>
              <li>Authentication & Security</li>
              <li>Deployment & testing</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                Real project experience
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                Portfolio-ready
              </span>
            </div>
          </div>

          {/* 3. Frontend Engineering */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3">
              Frontend Engineering
            </h2>

            <p className="text-gray-700 mb-4">
              Design and build modern, responsive web applications.
            </p>

            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>HTML, CSS, JavaScript</li>
              <li>React + Tailwind CSS</li>
              <li>UI/UX fundamentals</li>
              <li>API integration</li>
              <li>Performance optimization</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">
                Portfolio projects
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">
                Industry-ready skills
              </span>
            </div>
          </div>

          {/* 4. QA & Software Testing */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3">
              QA & Software Testing
            </h2>

            <p className="text-gray-700 mb-4">
              Ensure software quality through structured testing and automation.
            </p>

            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Manual testing</li>
              <li>Test cases & bug tracking</li>
              <li>Selenium / Playwright</li>
              <li>API testing</li>
              <li>CI test pipelines</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm">
                Entry-level QA roles
              </span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm">
                Outsourcing projects
              </span>
            </div>
          </div>

          {/* 5. Data & Analytics */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3">
              Data & Analytics <span className="text-sm text-gray-500">(Phase 2)</span>
            </h2>

            <p className="text-gray-700 mb-4">
              Turn data into insights that support business decisions.
            </p>

            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>SQL</li>
              <li>Python for data</li>
              <li>Data visualization</li>
              <li>Basic ML concepts</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded text-sm">
                Analyst-ready skills
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to choose your track?
        </h2>
        <p className="mb-6 text-gray-200">
          Join Open Talent and start building real experience today.
        </p>
        <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-medium hover:bg-gray-100">
          Join Open Talent
        </button>
      </section>

    </main>
  );
}
