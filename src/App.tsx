import { Route, Routes } from "react-router";
import DashboardLayout from "./pages/dashboard/layout";
import Repositories from "./pages/dashboard/repositories/page";
import Home from "./pages/page";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Redirect "/dashboard" to 404 */}
        <Route path="/dashboard" element={<>404</>} />
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route path="repositories" element={<Repositories />} />
          {/* <Route path="settings" element={<Settings />} /> */}
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </>
  );
}
