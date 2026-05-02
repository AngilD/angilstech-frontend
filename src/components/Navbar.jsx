import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Navbar() {
   const [openTalentOpen, setOpenTalentOpen] = useState(false);
   const [clubs, setClubs] = useState(false);
  return (
    // <nav className="w-full bg-white border-b border-gray-200">
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">
  <div className="max-w-7xl mx-auto px-2 py-3 grid grid-cols-3 grid-rows-2 items-start">
  {/* <div className="grid grid-cols-[auto_1fr_auto] grid-rows-2 gap-y-2 py-4"> */}


    {/* Logo - Left */}
    <div className="row-span-2 row-start-1">
      <img src={logo} alt="AngilsTech Logo" 
         
        className="h-30 bg-white p-1 rounded-md"
      
      />
    </div>

    {/* Company Name - Top Center */}
    <div className="col-start-2 row-start-1 text-center self-start">
      <h1 className="text-xl font-bold text-gray-800">AngilsTech</h1>
      <p className="text-sm text-gray-500">
        DevOps, Cloud Training & Job Outsourcing Solutions
      </p>
    </div>

   {/* <div className="col-start-3 row-start-2"> */}
   <div className="col-span-3 row-start-2 w-full mt-2 md:mt-4 lg:mt-0">
    <nav>
          
          
          {/* <ul className="absolute flex items-center gap-6 text-sm font-medium text-gray-700 z-50"> */}
          <ul className="flex items-center justify-end gap-6 w-full text-sm font-medium text-gray-700">

              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
              {/* <li><a href="#" className="hover:text-blue-600">Programs</a></li> */}

              {/* OPEN TALENT DROPDOWN */}
              <li
                className="relative"
                onMouseEnter={() => setOpenTalentOpen(true)}
                onMouseLeave={() => setOpenTalentOpen(false)}
              >
                <button className="hover:text-blue-600">
                  Open Talent ▾
                </button>

                {openTalentOpen && (
                  <div className="absolute right-0 mt-3 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                    
                    <Link to="/open-talent/overview" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                    <Link to="/open-talent/tracks" className="block px-4 py-2 hover:bg-gray-100">Tracks</Link>

                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">Overview</a> */}
                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tracks</a> */}
                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">How It Works</a> */}
                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">Apply</a> */}
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Success Stories</a>
                  </div>
                )}
              </li>
              {/* <li><a href="#" className="hover:text-blue-600">Clubs</a></li> */}

                {/* CLUB DROPDOWN */}
              <li
                className="relative"
                onMouseEnter={() => setClubs(true)}
                onMouseLeave={() => setClubs(false)}
              >
                <button className="hover:text-blue-600">
                  Clubs ▾
                </button>

                {clubs && (
                  <div className="absolute right-0 mt-3 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                    
                    <Link to="/pages/IndividualReg" className="block px-4 py-2 hover:bg-gray-100">Register as individual</Link>
                    <Link to="/pages/schoolapproval" className="block px-4 py-2 hover:bg-gray-100">Apply for school approval</Link>

                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">Overview</a> */}
                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tracks</a> */}
                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">How It Works</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Apply</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Success Stories</a> */}
                  </div>
                )}
              </li>
              <li><a href="#" className="hover:text-blue-600">Outsourcing</a></li>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
              {/* <li><a href="#" className="hover:text-blue-600">Contact</a></li> */}

            </ul>
         
    </nav>
   
  </div>
  </div>
</nav>

  );
}


