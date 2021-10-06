import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PhotoView from './components/PhotoView';
import Search from './components/Search';

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
          <Route path='/photo/:id' component={PhotoView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
