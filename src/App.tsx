import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ConfirmEmail from "./pages/auth/ConfirmEmail";
import NewPassword from "./pages/auth/NewPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import SignIn from "./pages/auth/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/dashboard/Transactions";
import Board from "./components/dashComponent/board/Board";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dashboard" element={<Board />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="" element={<Navigate to="/dashboard/dashboard" />} />
          {/* <Route path="admins" element={<Admins />} />
          <Route path="users" element={<Users />} /> */}
          {/* Add other routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
