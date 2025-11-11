import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolutionDetail from './components/SolutionDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution/:id" element={<SolutionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
