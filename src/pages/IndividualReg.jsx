export default function IndividualRegistration() {
  return (
    <main className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            Individual Tech Club Registration
          </h1>
          <p className="text-gray-600">
            For college & university students (18+)
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6">

          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="07XXXXXXXX"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* AGE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Age (18+)
            </label>
            <input
              type="number"
              min="18"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* INSTITUTION */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Institution
            </label>
            <input
              type="text"
              placeholder="University / College Name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* COURSE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Course / Program
            </label>
            <input
              type="text"
              placeholder="Computer Science"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* TRACK */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Tech Track
            </label>
            <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>DevOps & Cloud Engineering</option>
              <option>Backend Development</option>
              <option>Frontend Engineering</option>
              <option>QA & Software Testing</option>
              <option>Data & Analytics</option>
            </select>
          </div>

          {/* EXPERIENCE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Experience Level
            </label>
            <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <p className="text-sm text-gray-600">
              I agree to the AngilsTech Tech Club terms and community guidelines.
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
          >
            Register Now
          </button>

        </form>
      </div>
    </main>
  );
}
