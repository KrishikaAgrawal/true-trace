import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
// import Notification from "./pages/Notification/Notification.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import CardDescription from "./pages/Home/CardDescription";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Wishlist" element={<Wishlist />}></Route>
            <Route
              path="/CardDescription"
              element={<CardDescription />}
            ></Route>
            {/* <Route path="/Notification" element={<Notification />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
