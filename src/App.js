import logo from './logo.svg';
import './App.css';
import { MyCompanent } from './components/myComponents';

function App() {
  return (
    <div className="App">
      <MyCompanent.Header logo={logo} />
      <MyCompanent.Body />
      <MyCompanent.Users />
    </div>
  );
}

export default App;
