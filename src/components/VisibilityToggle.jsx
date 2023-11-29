import { useState } from 'react';

const VisibilityToggle = ({ defaultVisibility, children }) => {
  // State variable to track visibility
  const [isVisible, setIsVisible] = useState(defaultVisibility);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <div>{children}</div>}
    </div>
  );
};

export default VisibilityToggle;
