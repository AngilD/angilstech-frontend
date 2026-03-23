import { useState, useEffect } from "react";
import career from "../assets/career.jpg";
import cloud from "../assets/11.jpg";
import interns from "../assets/int.jpg";
import clubs from "../assets/clubs.jpg";

const slides = [
  {
    title: "Grow Your Tech Career",
    subtitle: "Professional DevOps & Cloud Training at AngilsTech",
    image: career,
  },
  {
    title: "Cloud & DevOps Excellence",
    subtitle: "AWS • Azure • CI/CD • Automation",
    image: cloud,
  },
  {
    title: "Internships & Job Outsourcing",
    subtitle: "We Train, Mentor & Connect You to Opportunities",
    image: interns,
  },
  {
    title: "Join Our IT Club to Empower Innovation",
    subtitle:"Driving Digital Transformation for Sustainable Growth" ,
    image: clubs,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered]=useState(false);
  useEffect(() => {
    if(isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);
  const slide = slides[current];
  return (
    <section className="relative w-full h-[40vh] bg-gradient-to-r from-blue-800 to-gray-800 px-6 overflow-hidden">
             
         onMouseEnter={()=>setIsHovered(true)}

         onMouseLeave={()=>setIsHovered(false)}
         
         {/* className="absolute inset-0 w-full h-full object-cover" */}
           {/* TEXT CONTENT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            {slide.subtitle}
          </p>
        </div>
        {/* IMAGE */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
         />
      </section>
         
  );
}
