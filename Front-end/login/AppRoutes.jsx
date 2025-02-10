import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // SignUp page
import Login from "./Login"; // Login page
import ForgotPassword from "./ForgotPassword"; // Forgot Password page
import Verify from "./Verify"; // Verify page
import ResetPassword from "./ResetPassword"; // Reset Password page

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
