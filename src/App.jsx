// src/App.js

// Importing the React library to create a React component
import React from "react";

// Importing the Header component from the components folder
import Header from "./components/Header";

// Importing the EmployeeTable component from the components folder
import EmployeeTable from "./components/EmployeeTable";

// Importing the EmployeeCard component from the components folder
import EmployeeCard from "./components/EmployeeCard";

// Defining the main App functional component
const App = () => {
  return (
    // Main container div for the app with responsive margin and padding
    <div className="container mx-auto p-4">
      {/* Rendering the Header component */}
      <Header />
      
      {/* Container div to arrange content in a column on small screens and a row on large screens */}
      <div className="flex flex-col lg:flex-row ">
        
        {/* Div for the EmployeeTable component, taking up 3/4 of the width on large screens */}
        <div className="lg:w-3/4">
          <EmployeeTable />
        </div>
        
        {/* Div for the EmployeeCard component, taking up 1/4 of the width on large screens, with top margin on small screens and left margin on large screens */}
        <div className="lg:w-1/4 mt-4  lg:mt-0 lg:ml-4">
          {/* Rendering the EmployeeCard component with props for name and position */}
          <EmployeeCard
            name="Rakesh Sharma" // Passing the name prop
            position="UI/UX Designer" // Passing the position prop
            image="employee-of-the-month.jpg" // Passing the image prop
          />
        </div>
      </div>
    </div>
  );
};

// Exporting the App component as the default export so it can be used in other parts of the application
export default App;
