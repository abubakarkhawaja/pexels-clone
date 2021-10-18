import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Banner from '../common/reusableComponents/Banner';
import Home from '../features/home/Home';
import NavBar from '../common/reusableComponents/NavBar';
import PhotoView from '../features/view/PhotoView';
import Search from '../features/search/Search';
import SearchVideos from '../features/search/SearchVideos';
import Videos from '../features/home/Videos';
import VideoView from '../features/view/VideoView';
import '../static/css/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
