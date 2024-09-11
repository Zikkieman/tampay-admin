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
import Transactions from "./pages/dashboard/transactions/Transactions";
import Board from "./components/dashComponent/board/Board";
import Assign from "./pages/dashboard/transactions/Assign";
import User from "./pages/dashboard/user/User";
import UserDetails from "./pages/dashboard/user/UserDetails";
import BanUser from "./components/userComponent/BanUser";
import LogoutUser from "./components/userComponent/LogoutUser";
import Admins from "./pages/dashboard/admins/Admins";

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
          <Route path="transactions/assign" element={<Assign />} />
          <Route path="admins" element={<Admins />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="users/ban" element={<BanUser />} />
          <Route path="users/logoutuser" element={<LogoutUser />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="" element={<Navigate to="/dashboard/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
