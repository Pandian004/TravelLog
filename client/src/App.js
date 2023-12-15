import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Profile' element={<Profile />} />
          </Route>
          <Route path='LoginPage' element={<LoginPage />} />
          <Route path='SignupPage' element={<SignupPage />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
