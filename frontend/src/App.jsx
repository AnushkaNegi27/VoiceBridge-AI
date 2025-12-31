import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translate from "./pages/Translate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/translate" element={<Translate />} />
    </Routes>
  );
}
