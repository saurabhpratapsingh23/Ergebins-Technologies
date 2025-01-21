import React, { useState, useEffect } from "react"; // Import useState and useEffect
import AdminHeader from "./AdminHeader";
import CustomerHeader from "./CustomerHeader";
import NormalHeader from "./NormalHeader";

const RoleNav = () => {
  const [role, setRole] = useState(null);

  const updateRole = () => {
    const user = sessionStorage.getItem("active-customer");
    const admin = sessionStorage.getItem("active-admin");

    if (user) setRole("customer");
    else if (admin) setRole("admin");
    else setRole("normal");
  };

  useEffect(() => {
    updateRole();
    const handleRoleChange = () => updateRole();
    window.addEventListener("roleChange", handleRoleChange);
    return () => window.removeEventListener("roleChange", handleRoleChange);
  }, []);

  if (role === "admin") return <AdminHeader />;
  if (role === "customer") return <CustomerHeader />;
  return <NormalHeader />;
};

export default RoleNav;
