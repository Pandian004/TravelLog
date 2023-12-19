import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateNewPost from './pages/CreateNewPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='Profile' element={<Profile />} />
          <Route path='LoginPage' element={<LoginPage />} />
          <Route path='SignupPage' element={<SignupPage />} />
          <Route path='CreateNewPost' element={<CreateNewPost />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
