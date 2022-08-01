import React from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";

import useToken from "../../Hooks/useAdminToken";

import AdminHeader from "../../Components/AdminHedaer/AdminHeader";
import AdminLogin from "../../Pages/AdminLogin/AdminLogin";

import AdminPosts from "../../Components/AdminPosts/AdminPosts";

import styles from "./Admin.module.scss";

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken();

  React.useEffect(() => {
    if (!token) navigate("/admin/login");
  }, [navigate, token]);

  return (
    <main className={styles["main--admin"]}>
      {location.pathname !== "/admin/login" && <AdminHeader />}

      <Routes>
        <Route path="/" element={<AdminPosts />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </main>
  );
};

export default Admin;
