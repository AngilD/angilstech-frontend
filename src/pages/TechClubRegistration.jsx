import { useState } from "react";

// console.log(import.meta.env.VITE_API_URL);

const apiUrl = import.meta.env.VITE_API_URL;
console.log("API URL:", apiUrl); // e.g., "API URL: https://api.example.com"


export default function TechClubRegistration() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [experience_level, setExperienceLevel] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [track, setTrack] = useState("");

  // ✅ ADD THESE TWO
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      // fetch(`${import.meta.env.VITE_API_URL}/api/students/register`, 
           
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/students/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          email,
          phone,
          age,
          experience_level,
          institution,
          course,
          track,
          password, // ✅ now exists
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

     // ✅ NEW LOGIC: This logic direct us to payments and store email and password in the browser
      localStorage.setItem("student_email", email);
      localStorage.setItem("student_phone", phone);
      // localStorage.setItem("student_id",data.studentId);

      if (data?.studentId) {
      localStorage.setItem("student_id", data.studentId);
      } else {
        console.error("No studentId returned:".data);
      }

      window.location.href = "/payment";

      } catch (error) {
      console.error("FRONTEND ERROR ❌", error);
      alert("Server error. Please try again later");
      }
  };

  return (
  <section className="max-w-3xl mx-auto px-6 py-16">
    <h1 className="text-3xl font-bold mb-8 text-center">
      Tech Club Registration
    </h1>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        value={full_name}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="w-full border p-3 rounded"
      />

      {/* TRACK */}
      <select
        value={track}
        onChange={(e) => setTrack(e.target.value)}
        className="w-full border p-3 rounded"
        required
      >
        <option value="">Select Track</option>
        <option value="DevOps & Cloud">DevOps & Cloud</option>
        <option value="Backend">Backend</option>
        <option value="Frontend">Frontend</option>
        <option value="QA">QA</option>
      </select>

      {/* EXPERIENCE LEVEL */}
      <select
        value={experience_level}
        onChange={(e) => setExperienceLevel(e.target.value)}
        className="w-full border p-3 rounded"
        required
      >
        <option value="">Experience Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
      >
        Register Now
      </button>
    </form>
  </section>
);

}
