import React from "react";

import employeeImage from "/image.jpg";

import graphicImage from "/image1.jpg";

// Defining the EmployeeCard functional component that accepts props: name and position
const EmployeeCard = ({ name, position }) => {
  return (
    // The main container div for the employee card 
    <div className="border p-4 rounded-lg shadow-md w-64 h-96">
      {/* Image tag to display the employee's profile picture with specific styling */}
      <img
        src={employeeImage} // Source of the image
        alt={`${name}'s profile`} // Alt text for the image, dynamically using the name prop
        className="h-40 w-full object-cover rounded-t-lg mb-4" // Styling for the image
      />
      {/* Header for the title "Employee of the Month" with text styling */}
      <h2 className="text-center text-xl font-bold mb-2 text-blue-800">
        Employee of the Month
      </h2>
      {/* Header for the employee's name with text styling */}
      <h3 className="text-center text-lg mb-1 text-bold">{name}</h3>
      {/* Paragraph for the employee's position with text styling */}
      <p className="text-center text-xs text-gray-500 mb-4">{position}</p>
      {/* Image tag to display the graphic at the bottom of the card with specific styling */}
      <img
        src={graphicImage} // Source of the image
        alt="Graphic" // Alt text for the image
        className="w-full h-20 object-cover rounded-b-lg" // Styling for the image
      />
    </div>
  );
};

export default EmployeeCard;
