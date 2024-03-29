import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
