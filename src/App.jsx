import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
