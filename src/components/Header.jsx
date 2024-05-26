import React from "react"; 
import logo from "/image2.jpg"; 

// Defining the Header functional component
const Header = () => {
  return (
    // Returning the JSX for the header element, styled with Tailwind CSS classes
    <header className="flex justify-between items-center p-4 bg-white pr-32">
      <div className="flex items-center">
        {/* Rendering the logo image with specific styles for margin, height, and width */}
        <img src={logo} alt="Logo" className="-ml-5 h-10 w-10 mr-2" />
        {/* Displaying the title of the dashboard */}
        <h1 className="text-2xl font-semibold">Employees Activity Dashboard</h1>
      </div>
      {/* Container for the date and time, styled with flexbox */}
      <div className="flex flex-col font-medium">
        <div>March 30, 2024</div> {/* Displaying the current date */}
        <div className="flex justify-end">09:36 AM</div> {/* Displaying the current time, aligned to the right */}
      </div>
    </header>
  );
};

export default Header;
