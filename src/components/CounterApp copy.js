import React, { useEffect, useRef } from 'react';

function App() {
  const truncateRef = useRef(null);

  useEffect(() => {
    const truncateElement = truncateRef.current;

    const truncateText = () => {
      const children = Array.from(truncateElement.children);
      let ellipsis = '...';
      
      // Restore the original content first
      truncateElement.innerHTML = children.map(child => child.outerHTML).join('');

      // Check if the content overflows and truncate accordingly
      for (let i = children.length - 1; i >= 0; i--) {
        if (truncateElement.scrollWidth > truncateElement.clientWidth) {
          children.pop(); // Remove the last child
          truncateElement.innerHTML = children.map(child => child.outerHTML).join('') + ellipsis;
        } else {
          break;
        }
      }
    };

    truncateText();
    window.addEventListener('resize', truncateText);

    return () => {
      window.removeEventListener('resize', truncateText);
    };
  }, []);

  return (
    <div
      className="truncate"
      ref={truncateRef}
      style={{
        width: '100px',   // Set the desired width
        overflow: 'hidden', // Hide overflow content
        whiteSpace: 'nowrap', // Prevent text wrapping
      }}
    >
      <div className="d-flex">
        <div className="d-flex fs-7">
          <div className="d-flex">
            <span className="badge bg-secondary">New</span>
            <span className="badge bg-secondary">New</span>
            <span className="badge bg-secondary">New</span>
            <span className="badge bg-secondary">New</span>
            <span className="badge bg-secondary">New</span>
            <span className="badge bg-secondary">New</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
