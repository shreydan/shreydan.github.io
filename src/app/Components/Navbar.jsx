import React from "react";
import Contact from "./Contact";

function Navbar() {
  return (
    <div className={`flex flex-col items-start justify-center mt-4 mb-8`}>
      <p className={`text-3xl`}>Shreyas Daniel Gaddam</p>
      <p className={`text-lg font-light mb-2`}>
        Machine Learning Engineer and Researcher
      </p>
      <Contact />
    </div>
  );
}

export default Navbar;
