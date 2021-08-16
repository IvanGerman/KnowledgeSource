import React from 'react';
import Topic from './Topic/Topic';
import styles from './Topics.module.css';
//import { NavLink } from 'react-router-dom';

const Topics = (props) => {  

  return (
    <div  className = { styles.wrapper }>
      <Topic/>
    </div>
  )
};

export default Topics;
