import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ProductAdminDashboard from "./dashboard/ProductAdminDashboard";
import Products from "./products/Products";
import Accounts from "./accounts/Accounts";
import Footer from "./Footer";

// Create a context to share the data
export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if the data is available in local storage
    const storedData = localStorage.getItem("appData");

    if (storedData) {
      // If data is available in local storage, parse and use it
      setData(JSON.parse(storedData));
    } else {
      // If data is not in local storage, fetch it from the API
      fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
        .then((response) => response.json())
        .then((apiData) => {
          // Store the data in local storage for future use
          localStorage.setItem("appData", JSON.stringify(apiData));
          setData(apiData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DataContext.Provider value={data}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Admin_Panel" element={<ProductAdminDashboard />} />
            <Route path="/dashboard" element={<ProductAdminDashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </DataContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;