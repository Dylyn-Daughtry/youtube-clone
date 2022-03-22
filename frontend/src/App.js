// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//import Comment from "./components/Comment/Comment";
// Util Imports
//import PrivateRoute from "./utils/PrivateRoute";
//import SearchBar from "./components/SearchBar/SearchBar";
//import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/?' element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
