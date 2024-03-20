import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import Shop from "./Pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
