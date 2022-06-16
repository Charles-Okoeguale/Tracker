import './App.css';

function App() {
  return (
    <div className="coin-app">
      <div className='coin-search'>
          <h1 className='coin-text'>Search a currency</h1>
          <form>
              <input 
              type="text"
              className='coin-input'
              placeholder='search'
               />
          </form>
      </div>
    </div>
  );
}

export default App;
