import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Notification from "./pages/Notification/Notification";
import Wishlist from "./pages/Wishlist/Wishlist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
          <Route path="/Notification" element={<Notification />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
