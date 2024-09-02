import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ConfirmEmail from "./pages/auth/ConfirmEmail";
import NewPassword from "./pages/auth/NewPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
