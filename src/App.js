import './App.scss';
import Nav from "./componentes/Nav"
import SearchBar from './componentes/SearchBar';
import Section from './componentes/Section';



const App = () => {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <Section />
      
    </div>
  );
}

export default App;
