// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";  // Import Routes Component
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <AppRoutes />  {/* ✅ Render Routes here */}
    </CartProvider>
  );
}

export default App;
