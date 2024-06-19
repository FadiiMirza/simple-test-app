import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import UserProfile from "./components/userProfile";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/profile" element={<UserProfile />}></Route>
    </Routes>
  );
}

export default App;
