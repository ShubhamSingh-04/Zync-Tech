import './App.css';

import NavBar from './components/navbar/NavBar'
import SignUp from './components/sign-up/SignUp';
import Features from './components/features/Features';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="main-section">
        <SignUp/>
        <Features/>
      </div>
    </div>
  );
}

export default App;
