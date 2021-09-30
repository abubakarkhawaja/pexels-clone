import './App.css';
require('dotenv').config('./.env');

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React + key= {process.env['REACT_APP_API_KEY']}
        </a>
      </header>
    </div>
  );
}

export default App;
