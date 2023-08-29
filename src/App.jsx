import './App.css';
import Navigation from './components/Navigation';
import { Hero } from './components/Hero';
import Form from './components/form';
import Counter from './components/counter';
import Registration from './components/registration';
import Usergreet from './components/usergreet';
import NameList from './components/nameList';
import Stylesheets from './components/stylesheets';
import Covid from './components/covid';


const App = () => {
  return (
    <div className="App">
      {/* <Navigation/>
      <Hero/> */}
        <Form/>
        <Counter/>
        <Stylesheets primacy={false}/>
        <Registration/>
        <Usergreet/>
        <NameList/>
        <Covid/>
    </div>
  );
}

export default App;
