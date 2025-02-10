import React from "react";
import UploadPortal from "./components/UploadPortal"; 
function App() {
  return (
    <div>
      <UploadPortal />  {/* ✅ Only render UploadFile, no extra text */}
    </div>
  );
}

export default App;
