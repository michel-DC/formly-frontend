import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import ProfilePage from "./pages/profile/profile-page";
import LoginPage from "./pages/auth/login/login-form";
import RegisterPage from "./pages/auth/register/register-form";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/mon-profil" element={<ProfilePage />} />
      </Routes>

      <Routes>
        <Route path="/se-connecter" element={<LoginPage />} />
      </Routes>

      <Routes>
        <Route path="/creer-un-compte" element={<RegisterPage />} />
      </Routes>
    </main>
  );
}

export default App;
