import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import ProfilePage from "./pages/profile/profile-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
