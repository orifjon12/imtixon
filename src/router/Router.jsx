import { Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import Single from "./single/Single.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Single />} />
    </Routes>
  );
}

export default Router;
