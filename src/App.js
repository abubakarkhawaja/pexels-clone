import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Banner />
            <Home />
          </Route>
          <Route path='/search?query=:query' component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
