import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const token = localStorage.getItem("user");
  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
