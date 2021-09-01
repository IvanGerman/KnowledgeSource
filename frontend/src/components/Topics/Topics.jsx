import React from 'react';
import BackButton from '../BackButton/BackButton';
import Topic from './Topic/Topic';
import styles from './Topics.module.css';
//import { NavLink } from 'react-router-dom';

const Topics = (props) => {  

  return (
    <div  className = { styles.wrapper }>
      <div className = { styles.topicsContent }>
      <Topic/>
      </div>
      <BackButton/>
    </div>
  )
};

export default Topics;
