import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateNewPost from './pages/CreateNewPost';
import AddInfo from './pages/AddInfo';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='ViewPost' element={<ViewPost />} />
          </Route>
          <Route path='Profile' element={<Profile />} />
          <Route path='LoginPage' element={<LoginPage />} />
          <Route path='SignupPage' element={<SignupPage />} />
          <Route path='CreateNewPost' element={<CreateNewPost />} />
          <Route path='AddInfo' element={<AddInfo />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
