import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import VideoPage from "./Pages/VideoPage";
import LoginComponent from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/videos" element={<VideoPage/>} />
        <Route path="/login" element={<LoginComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
