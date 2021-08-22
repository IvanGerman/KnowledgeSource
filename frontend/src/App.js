import { Route } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage/StartPage';
import Stats from './components/Stats/Stats';
import SubTopics from './components/SubTopics/SubTopics';
import Topics from './components/Topics/Topics';

function App() {

  const options = {
    max: 17,
    speed: 800,
    glare: true,
    "max-glare": 1
  };
  return (
    <div className="app-wrapper">
      <Route exact path = '/' render = { () => <StartPage options={options} /> } />  
      <Route exact path = '/topics' render = { () => <Topics /> } />
      <Route exact path = '/stats' render = { () => <Stats /> } />
      <Route exact path = '/subtopics' render = { () => <SubTopics /> } />
    </div>
  );
}

export default App;
