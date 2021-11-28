import "./App.css";
import Category from "./sections/Category";
import Hero from "./sections/Hero";
import Steps from "./sections/Steps";
import TopSelling from "./sections/TopSelling";

function App() {
  return (
    <div className="App">
      <Hero />
      <Category />
      <TopSelling />
      <Steps />
    </div>
  );
}

export default App;
