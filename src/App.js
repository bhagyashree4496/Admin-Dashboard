import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Userlist from "./Pages/userlist/Userlist";
import Userpage from "./Pages/userpage/Userpage";

function App() {
  return (
    <>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/users" element={<Userlist />} />
            <Route path="/user/:userId" element={<Userpage></Userpage>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
