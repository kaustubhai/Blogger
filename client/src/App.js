import './App.css';
import Navbar from './components/layouts/Navbar';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import BlogState from './context/Blogs/BlogState';

function App() {
  return (
    <div className="App">
      <BlogState>
        <Navbar />
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Router>
      </BlogState>
    </div>
  );
}

export default App;
