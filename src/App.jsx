import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ProtectedRoutes from "../context/ProtectedRoutes";
import Dashboard from "../dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Products />} />
        <Route path="/admin" element={
          <ProtectedRoutes roles={["admin"]}>
            <Dashboard/>
          </ProtectedRoutes>

        }></Route>
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
