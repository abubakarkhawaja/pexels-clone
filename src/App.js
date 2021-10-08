import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PhotoView from './components/PhotoView';
import Search from './components/Search';
import SearchVideos from './components/SearchVideos';
import Videos from './components/Videos';
import VideoView from './components/VideoView';
import './style/App.css';

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
          <Route path='/videos' exact>
            <Banner />
            <Videos />
          </Route>
          <Route path='/search' component={Search} />
          <Route
            path='/search/videos?query=:query'
            component={SearchVideos}
            exact
          />
          <Route path='/photo/:id' component={PhotoView} />
          <Route path='/video/:id' component={VideoView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
