import { track } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState("");

  // Upload states
  const [title, setTitle] = useState("");
  const [track, setTrack] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const token = localStorage.getItem("adminToken");

  // ========================
  // FETCH STUDENTS
  // ========================
  useEffect(() => {
    if (!token) {
      setError("Unauthorized. Please login.");
      return;
    }

     fetch(`${import.meta.env.VITE_API_URL}/api/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setStudents(data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  // ========================
  // FETCH LESSONS
  // ========================
  // const fetchLessons = () => {

    

  //   fetch("http://localhost:5000/api/lessons", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setLessons(data))
  //     .catch((err) => console.error("Fetch lessons error:", err));
  // };
const fetchLessons = () => {
  fetch(`${import.meta.env.VITE_API_URL}/api/lessons`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch lessons");
      }
      return res.json();
    })
    .then((data) => setLessons(data))
    .catch((err) => console.error("Fetch lessons error:", err));
};

  useEffect(() => {
    fetchLessons();
  }, []);

  // ========================
  // DELETE LESSON
  // ========================
  const handleDeleteLesson = async (lessonId) => {
    if (!window.confirm("Are you sure you want to delete this lesson?")) return;

    try {
      const res = await fetch(


        
        `${import.meta.env.VITE_API_URL}/api/admin/delete-content/${lessonId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      alert("Lesson deleted successfully");
      fetchLessons(); // Refresh lessons

    } catch (err) {
      console.error(err);
      alert("Failed to delete lesson");
    }
  };

  // ========================
  // UPLOAD LESSON
  // ========================
  const handleUpload = async (e) => {
    e.preventDefault();

    console.log("TRACK", track);

    if (!file || !title) {
      alert("Title and file are required");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("track", track);

    try {
      setUploading(true);

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/upload-content`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      alert("Upload successful");

      setTitle("");
      setDescription("");
      setFile(null);

      fetchLessons(); // Refresh lessons

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* ========================
          STUDENTS TABLE
         ======================== */}
      <h2 className="text-xl font-semibold mb-2">Students</h2>
      <table className="w-full border mb-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Institution</th>
            <th className="border p-2">Track</th>
            <th className="border p-2">Level</th>
            <th className="border p-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) &&
            students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2">{student.full_name}</td>
                <td className="border p-2">{student.email}</td>
                <td className="border p-2">{student.phone}</td>
                <td className="border p-2">{student.institution}</td>
                <td className="border p-2">{student.track}</td>
                <td className="border p-2">{student.experience_level}</td>
                <td className="border p-2 font-semibold">{student.payment_status}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* ========================
          UPLOAD LESSON FORM
         ======================== */}
      <h2 className="text-xl font-semibold mb-2">Upload Lesson</h2>
      <form onSubmit={handleUpload} className="border p-4 mb-8 space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div>
         <label className="block font-medium">Track</label>
         <select
         value={track}
         onChange={(e) => setTrack(e.target.value)}
         className="border p-2 w-full"
         required
         >
         <option value="">Select Track</option>
         <option value="Frontend">Frontend</option>
         <option value="Backend">Backend</option>
         <option value="DevOps & Cloud">DevOps & Cloud</option>
         <option value="QA">QA</option>
         </select>
         </div>

        <div>
          <label className="block font-medium">File (MP4 or PDF)</label>
          <input
            type="file"
            accept=".mp4,.pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {uploading ? "Uploading..." : "Upload Lesson"}
        </button>
      </form>

      {/* ========================
          LESSONS TABLE
         ======================== */}
      <h2 className="text-xl font-semibold mb-2">Lessons</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Track</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson.id}>
              <td className="border p-2">{lesson.title}</td>
              <td className="border p-2">{lesson.track}</td>
              <td className="border p-2">{lesson.description}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDeleteLesson(lesson.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {lessons.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">
                No lessons found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
