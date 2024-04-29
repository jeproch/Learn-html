import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/another-page" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
