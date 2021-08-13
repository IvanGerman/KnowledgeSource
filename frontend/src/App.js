import { Route } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage/StartPage';
import Stats from './components/Stats/Stats';
import Topics from './components/Topics/Topics';

function App() {
  return (
    <div className="app-wrapper">
      <Route exact path = '/' component = {StartPage} />
      <Route exact path = '/topics' component = {Topics} />
      <Route exact path = '/stats' component = {Stats} />
    </div>
  );
}

export default App;
