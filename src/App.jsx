import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter basename="/ColossalNotebook">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hierarchy" element={<Hierarchy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
