import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Banner from './components/Banner';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PhotoView from './components/PhotoView';
import Search from './components/Search';
import SearchVideos from './components/SearchVideos';
import Signup from './components/Signup';
import Videos from './components/Videos';
import VideoView from './components/VideoView';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/' exact>
            <Redirect to='/images' />
          </Route>
          <Route path='/images' exact>
            <Banner />
            <Home />
          </Route>
          <Route path='/videos' exact>
            <Banner />
            <Videos />
          </Route>
          <Route path='/search/images' component={Search} exact />
          <Route path='/search/videos' component={SearchVideos} exact />
          <Route path='/photo/:id' component={PhotoView} />
          <Route path='/video/:id' component={VideoView} />
          <Route path='/profile' component={Profile} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
