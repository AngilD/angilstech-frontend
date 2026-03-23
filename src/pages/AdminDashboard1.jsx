export default function AdminDashboard() {
  // Temporary mock data (later comes from backend)
  const schoolRegistrations = [
    {
      school: "ABC Secondary School",
      county: "Nairobi",
      contact: "Jane Doe",
      phone: "0712345678",
      students: 40,
    },
    {
      school: "Bright Future Primary",
      county: "Kiambu",
      contact: "John Mwangi",
      phone: "0798765432",
      students: 25,
    },
  ];

  const individualRegistrations = [
    {
      name: "Peter Otieno",
      institution: "University of Nairobi",
      track: "DevOps & Cloud",
      phone: "0700123456",
    },
    {
      name: "Aisha Hassan",
      institution: "JKUAT",
      track: "Frontend Engineering",
      phone: "0722334455",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        {/* SCHOOL REGISTRATIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            School Tech Club Registrations
          </h2>

          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="p-3">School</th>
                  <th className="p-3">County</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Students</th>
                </tr>
              </thead>
              <tbody>
                {schoolRegistrations.map((school, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{school.school}</td>
                    <td className="p-3">{school.county}</td>
                    <td className="p-3">{school.contact}</td>
                    <td className="p-3">{school.phone}</td>
                    <td className="p-3">{school.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* INDIVIDUAL REGISTRATIONS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Individual Registrations
          </h2>

          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Institution</th>
                  <th className="p-3">Track</th>
                  <th className="p-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                {individualRegistrations.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.institution}</td>
                    <td className="p-3">{user.track}</td>
                    <td className="p-3">{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
}
