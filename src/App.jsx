import './App.css';
import Navigation from './components/Navigation';
import { Hero } from './components/Hero';
import Form from './components/form';
import Counter from './components/counter';


const App = () => {
  return (
    <div className="App">
      {/* <Navigation/>
      <Hero/> */}
        <Form/>
        <Counter/>
    </div>
  );
}

export default App;
