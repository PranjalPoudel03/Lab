import './App.css';
import Cards from './Components/Cards';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Food Truck Favorites</h1>
      </header>
      <Cards />
    </div>
  );
};

export default App;

