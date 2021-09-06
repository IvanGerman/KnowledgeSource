import { Route } from 'react-router-dom';
import styles from './App.module.css';
import ContentBlocks from './components/ContentBlocks/ContentBlocks';
import StartPage from './components/StartPage/StartPage';
import Stats from './components/Stats/Stats';
import SubTopicsContainer from './components/SubTopics/SubTopicsContainer';
import TopicsContainer from './components/Topics/TopicsContainer';

function App() {

  const options = {
    max: 17,
    speed: 800,
    glare: true,
    "max-glare": 1,
    scale: 1.05,
    perspective: 2000,
    transition: true
  };
  return (
    <div className = { styles.wrapper } >
      <Route exact path = '/' render = { () => <StartPage options={options} /> } />  
      <Route exact path = '/topics' render = { () => <TopicsContainer /> } />
      <Route exact path = '/stats' render = { () => <Stats /> } />
      <Route exact path = '/subtopics' render = { () => <SubTopicsContainer /> } /> 
      <Route exact path = '/contentblocks' render = { () => <ContentBlocks /> } />
    </div>
  );
}

export default App;
