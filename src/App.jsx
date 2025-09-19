// import React, { useState } from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Video/Video";
// import Video from "./Pages/Home/Home"; 
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Feed from "./Components/Feed/Feed";

// function App() {
//   const [sidebar,setSidebar]= useState(true)
//   return (
//     <div>
//       <Navbar setSidebar={setSidebar}/>
//       <Routes>
//         <Route path="/" element={<Home sidebar={sidebar}/>} />
//         <Route path="/video/:categoryId/:videoId" element={<Video/>} />
//       </Routes>
//       <Sidebar sidebar={sidebar}/>
//       <Feed/>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home"; 
// import Video from "./Pages/Video/Video"; 
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Feed from "./Components/Feed/Feed";

// function App() {
//   const [sidebar,setSidebar]= useState(true)
//   return (                                                ///// ikinci islek 
//     <div>
//       <Navbar setSidebar={setSidebar}/>
//       <Routes>
//         <Route path="/" element={<Home sidebar={sidebar}/>} />
//         <Route path="/video/:categoryId/:videoId" element={<Video/>} />
//       </Routes>
//       <Sidebar sidebar={sidebar}/>
//       <Feed/>
//     </div>
//   );
// }

// export default App;

// App.jsx
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0); // Global category

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route 
          path="/" 
          element={<Home sidebar={sidebar} category={category} setCategory={setCategory} />} 
        />
        <Route 
          path="/video/:categoryId/:videoId" 
          element={<Video sidebar={sidebar} category={category} setCategory={setCategory} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
