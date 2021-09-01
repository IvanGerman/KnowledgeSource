import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Topic.module.css';
//import { NavLink } from 'react-router-dom';

const Topic = (props) => {  

  return (
    <div  className = { styles.wrapper }>
      Single Topic
      <br/>
      <NavLink to = "/subtopics" >To the SubTopics</NavLink>
    </div>
  )
};

export default Topic;
