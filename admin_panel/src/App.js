import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Login from "./Login";
import ProductAdminDashboard from "./dashboard/ProductAdminDashboard";
import Products from "./products/Products";
import Accounts from "./accounts/Accounts";
import Footer from "./Footer";
import NewProduct from "./products/NewProduct";
import AddCategory from "./products/AddCategory";

export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("appData");
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    setUserLoggedIn(userLoggedIn === "true"); // Parse the value as a boolean

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
        .then((response) => response.json())
        .then((apiData) => {
          localStorage.setItem("appData", JSON.stringify(apiData));
          setData(apiData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  const handleLogin = () => {
    setUserLoggedIn(true);
    localStorage.setItem("userLoggedIn", "true");
  };

  return (
    <BrowserRouter>
      
            <Navbar />     {" "}
      <DataContext.Provider value={data}>
               {" "}
        <Routes>
                   {" "}
          <Route path="/Admin_Panel" element={<Login handleLogin={handleLogin} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={userLoggedIn ? <ProductAdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/products" element={userLoggedIn ? <Products /> : <Navigate to="/login" />} />
          <Route path="/accounts" element={userLoggedIn ? <Accounts /> : <Navigate to="/login" />} />
          <Route path="/products/add-product" element={userLoggedIn ? <NewProduct /> : <Navigate to="/login" />} />
          <Route path="/products/add-category" element={userLoggedIn ? <AddCategory /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1 style={{ color: "white", textAlign : "center"}}>404 Not found!!</h1>} />
                 {" "}
        </Routes>
             {" "}
      </DataContext.Provider>
            <Footer />   {" "}
    </BrowserRouter>
  );
}

export default App;