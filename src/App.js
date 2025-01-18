import './App.css';

import NavBar from './components/navbar/NavBar'
import SignUp from './components/sign-up/SignUp';
import Features from './components/features/Features';
import Sysyphus from './components/sysyphys/Sysyphus';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="main-section">
        <SignUp/>
        <Features/>
        <Sysyphus/>
      </div>
    </div>
  );
}

export default App;
