import React from "react"; 
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses"; 
import Signup from "./components/Signup";
import ContactForm from "./components/Contact";
import AboutForm from "./components/About"; 
function App() {
  return (
  <>
 <div className="dark:bg-slate-900 dark:text-white">
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/course" element={<Courses />} /> 
  <Route path="/signup" element={<Signup />} />
  <Route path="/contact" element={<ContactForm />} /> 
  <Route path="/about" element={<AboutForm />} /> 

 </Routes>
 </div>
 
  </>
   );
}

export default App; 