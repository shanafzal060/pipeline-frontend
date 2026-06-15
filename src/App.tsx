import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { HomeServices } from "./pages/HomeServices";
import Demo from "./pages/Demo";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeServices />} />
            <Route path="demo" element={<Demo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
