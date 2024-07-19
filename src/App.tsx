import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './views/data-collection';
import './App.css';
import Login from './views/login';
import RequireAuth from './routing/RequireAuth';
import ClimateNeutral from './views/climate-neutral';
import LandingPage from './views/climate-neutral/LandingPage';
import Analysis from './views/analysis';
import AbateEmissions from './views/abate-emissions';
import Overview from './views/overview';
import BuyCredits from './views/buy-credits';

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/climate-neutral" element={<ClimateNeutral />} />
          <Route path="/dataCollection/*" element={<HomeScreen />} />
          <Route path="userslist" element={<HomeScreen />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="abate-emission" element={<AbateEmissions />} />
          <Route path="overview" element={<Overview />} />
          <Route path="/buy-credits" element={<BuyCredits />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
