// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenger from './components/Challenge';

// Styles / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <Challenger/>
    </div>
  );
}

export default App;
