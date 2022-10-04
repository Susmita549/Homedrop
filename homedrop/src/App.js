import './App.css';
import Topnav from './components/Topnav';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Mainbody/>
    </div>
  );
}

export default App;
