import './App.css';

import NavBar from './components/navbar/NavBar'
import SignUp from './components/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="main-section">
        <SignUp/>
      </div>
    </div>
  );
}

export default App;
