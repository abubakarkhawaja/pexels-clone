import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import { clearUserAction } from '../actions/actions';
import './NavBar.css';

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  const activeUser = user.users.byId[user.authenticatedUser];

  const logout = () => {
    dispatch(clearUserAction());
  };

  return (
    <nav className={`nav`}>
      <div className='nav__logo'>
        <Link to='/images' className='nav__logo__link'>
          <div className='nav__logo__img'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32px'
              height='32px'
              viewBox='0 0 32 32'
            >
              <path
                d='M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z'
                fill='#05A081'
              ></path>
              <path
                d='M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z'
                fill='#fff'
              ></path>
            </svg>
          </div>
          <div className='nav__logo__text' href='/'>
            Pexels
          </div>
        </Link>
        <SearchBar />
      </div>
      {user?.isAuthenticated ? (
        <span>
          <Link className='username' to='/profile'>
            Hi {activeUser?.name}!
          </Link>
          <a className='nav__content' onClick={logout}>
            Logout
          </a>
        </span>
      ) : (
        <Link className='nav__content' to='/login'>
          Login
        </Link>
      )}
    </nav>
  );
}

export default NavBar;
