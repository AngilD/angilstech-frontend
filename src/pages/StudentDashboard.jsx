import { useEffect, useState } from "react";

export default function StudentDashboard() {
  const [lessons, setLessons] = useState([]);
  const token = localStorage.getItem("studentToken");

  useEffect(() => {
    if (!token) return;

      fetch(`${import.meta.env.VITE_API_URL}/api/studentLessons`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch(() => alert("Access denied"));
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Lessons</h1>

      {lessons.map((lesson) => (
        <div key={lesson.id} className="border p-4 mb-4 rounded">
          <h3 className="font-semibold">{lesson.title}</h3>
          <p className="mb-2">{lesson.description}</p>

          {/* 🎥 VIDEO */}
          {/* {lesson.file_type === "video" && (
            <video controls className="w-full mt-2">
              <source src={lesson.file_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )} */}

          {lesson.file_type === "video" && (
          <video controls className="w-full mt-2">
          <source src={lesson.file_url} type="video/mp4" />
          </video>
          )}

          {/* 📄 PDF */}
          {/* {lesson.file_type === "pdf" && (
            <iframe
              src={`${lesson.file_url}#toolbar=0`}
              className="w-full h-[600px] mt-2 border"
              title={lesson.title}
            />
          )} */}

          {lesson.file_type === "raw" && (
          <iframe
           src={`${lesson.file_url}#toolbar=0`}
            className="w-full h-[600px] mt-2 border"
            title={lesson.title}
          />
          )}
        </div>
      ))}
    </div>
  );
}
