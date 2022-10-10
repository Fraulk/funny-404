import './App.css';
import { Illustration } from './assets/Illustration';
import ErrorWindow from './components/ErrorWindow/ErrorWindow';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="header__company">COMPANY</div>
        <div className="header__links">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>BLOG</span>
          <span>CONTACT</span>
        </div>
      </div>
      <ErrorWindow />
      <div className="errorState__svg" title='illustration from unDraw'>
        <Illustration />
      </div>
    </div>
  );
}

export default App;
