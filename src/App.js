import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:id">
            <UserPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
