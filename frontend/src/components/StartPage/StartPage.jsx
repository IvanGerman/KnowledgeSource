import React, { useEffect, useRef } from 'react';
import styles from './StartPage.module.css';
//import { NavLink } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

const StartPage = (props) => {  

  const { options } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div  className = { styles.wrapper }  >
      <div  className = { styles.container } >
        <div  className = { styles.card } id = { styles.appName } ref={tilt}>
          <div  className = { styles.content } >
            <h3 id="main-h3">KnowledgeSource</h3>
            <br />
            <h4>Your helper by studying and memorizing new learning materials</h4>
          </div>
        </div>
        <div className = { styles.card } id = { styles.topics }  >
          <div  className = { styles.content } >
            <h3>Topics</h3>
            <br />
            <h4>here are the main topics of your learning materials</h4>
            <a href="#">Get Started</a>
          </div>
        </div>
        <div className = { styles.card } id = { styles.stats }  >
          <div className = { styles.content } >
            <h3>Stats</h3>
            <br />
            <h4>some informations about the stuff you want to memorize</h4>
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StartPage;
