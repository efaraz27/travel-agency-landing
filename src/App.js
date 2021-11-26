import './App.css';
import Category from './sections/Category';
import Hero from './sections/Hero';
import TopSelling from './sections/TopSelling';

function App() {
  return (
    <div className="App">
      <Hero />
      <Category />
      <TopSelling />
    </div>
  );
}

export default App;
