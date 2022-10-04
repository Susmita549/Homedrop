import './App.css';
import Topnav from './components/Topnav';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Sidebar />
      <Body/>
    </div>
  );
}

export default App;
