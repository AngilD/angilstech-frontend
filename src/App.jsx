
import {Routes, Route } from "react-router-dom";
import OpenTalentOverview from "./pages/OpenTalentOverview";
import OpenTalentTracks from "./pages/OpenTalentTracks";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Clubs from "./pages/Clubs";
import IndReg from "./pages/TechClubRegistration";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import HeroSlider from "./components/HeroSlider";
import ProtectedRoute from "./components/ProtectedRuter";
import StudentDashboard from "./pages/StudentDashboard";
import StudentLogin from "./pages/StudentLogin";
import Payment from "./pages/payment";
import Contact from "./pages/Contact";



export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f7fa" }}>
      
            {/* HEADER / HERO SECTION */}
      <header
          style={{
          background: "#0f172a",
          color: "#fff",
          // padding: "80px",
          // textAlign: "center",
        }}
      >
       {/* NAVBAR */}
       <Navbar />
      
       {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" /> */}
       <nav className="bg-black border-b border-gray-200 shadow-sm"></nav>
       <HeroSlider />
        
      </header>
        
        <Routes>
          {/* <Route path="/open-talent" element={<OpenTalentOverview />} /> */}
          <Route path="/open-talent/overview" element={<OpenTalentOverview />} />
          <Route path="/open-talent/tracks" element={<OpenTalentTracks />} />
          <Route path="/pages/schoolapproval" element={<Clubs />} />
          <Route path="/pages/IndividualReg" element={<IndReg />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute> <AdminDashboard/> </ProtectedRoute>} /> 
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
               
      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "40px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >

       </motion.section>

      {/* TEAM SECTION */}
      {/* <Team /> */}

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{
          padding: "40px",
          background: "#020617",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2>Contact Us</h2>
        <p>P.O. Box 445, Nairobi, Kenya</p>
        <p>+254726302779</p>
        <p>angilstech@org.ke</p>

      </section>
    </div>
  );
}


