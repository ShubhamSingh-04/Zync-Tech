import './App.css';

import NavBar from './components/navbar/NavBar'
import SignUp from './components/sign-up/SignUp';
import Features from './components/features/Features';
import Sysyphus from './components/sysyphys/Sysyphus';
import Faq from './components/faq/Faq';
import Blog from './components/blog/Blog';
import FreeTrial from './components/free-trial/FreeTrial';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="main-section">
        <SignUp/>
        <Features/>
        <Sysyphus/>
        <Faq/>
        <Blog/>
        <FreeTrial/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
