import logo from './logo.svg';
import './App.css';
import Principal from "./components/Principal"

function App({link}) {
  return (
    <div className="App">
      <Principal link={link}></Principal>
    </div>
  );
}

export default App;
