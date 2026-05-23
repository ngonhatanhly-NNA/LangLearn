import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import AddWord from './pages/AddWord';
import Review from './pages/Review';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddWord />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;