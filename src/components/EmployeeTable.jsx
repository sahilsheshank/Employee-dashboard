import React from "react";

import personIcon from "/image.jpg";

// Defining a list of employees with their details
const employees = [
  {
    rank: 1, 
    name: "Rakesh Sharma", 
    designation: "UI/UX Designer", 
    hours: "7(42)", 
    changes: "▲ 1.5 hrs", 
    changeType: "positive", 
  },
  {
    rank: 2,
    name: "Ankita Thakur",
    designation: "HR Recruiter",
    hours: "7(41)",
    changes: "▼ 1.5 hrs",
    changeType: "negative",
  },
  // Additional employees...
];

// Defining the EmployeeTable functional component
const EmployeeTable = () => {
  // Function to render the appropriate medal based on rank
  const renderMedal = (rank) => {
    if (rank === 1)
      return <img src="/gold.jpg" alt="Gold Medal" className="w-7 h-7" />; // Gold medal for rank 1
    if (rank === 2)
      return <img src="/silver.jpg" alt="Silver Medal" className="w-7 h-7" />; // Silver medal for rank 2
    if (rank === 3)
      return <img src="/bronze.jpg" alt="Bronze Medal" className="w-7 h-7" />; // Bronze medal for rank 3
    return null; // No medal for other ranks
  };

  return (
    // Returning the JSX for the employee table
    <table className="min-w-full">
      <thead className="bg-blue-800 text-white">
        <tr>
          <th></th> {/* Empty header for medal column */}
          <th className="py-2 px-4">Rank</th> {/* Header for rank */}
          <th className="py-2 px-4">Name</th> {/* Header for name */}
          <th className="py-2 px-4">Designation</th> {/* Header for designation */}
          <th className="py-2 px-4">No. of hours worked</th> {/* Header for hours worked */}
          <th className="py-2 px-4">Changes</th> {/* Header for changes */}
        </tr>
      </thead>
      <tbody>
        {/* Mapping through the employees array to create table rows */}
        {employees.map((employee) => (
          <tr key={employee.rank} className="text-center border-b">
            <td className="py-4">{renderMedal(employee.rank)}</td> {/* Medal column */}
            <td className="py-4">{employee.rank}</td> {/* Rank column */}
            <td className="py-4">
              <div className="flex items-center space-x-2 justify-start pl-4">
                <img
                  src={personIcon}
                  alt="Person"
                  className="w-6 h-6 rounded-full"
                /> {/* Person icon */}
                <span>{employee.name}</span> {/* Employee name */}
              </div>
            </td>
            <td className="py-4">{employee.designation}</td> {/* Designation column */}
            <td className="py-4">{employee.hours}</td> {/* Hours worked column */}
            <td className="py-4 flex justify-center items-center">
              <span
                className={`${
                  employee.changeType === "positive"
                    ? "text-green-500" // Green text for positive changes
                    : "text-red-500" // Red text for negative changes
                }`}
              >
                {employee.changes.charAt(0)} {/* First character of changes (▲ or ▼) */}
              </span>
              <span className="text-black ml-1">
                {employee.changes.slice(1)} {/* Rest of the changes text */}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
