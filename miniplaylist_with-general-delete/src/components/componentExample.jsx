// Import React (optional in React 17+, good practice for clarity)
import React from "react";

// Component definition
const ComponentName = ({ prop1, prop2, prop3 }) => {
  return (
    <div className="component-name">
      {/* Example usage of props */}
      <h2>{prop1}</h2>
      <p>{prop2}</p>
      <img src={prop3} alt={prop1} />
    </div>
  );
};

// Export component
export default ComponentName;
