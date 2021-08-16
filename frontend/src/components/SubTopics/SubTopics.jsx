import React from 'react';
import SubTopic from './SubTopic/SubTopic';

import styles from './SubTopics.module.css';
//import { NavLink } from 'react-router-dom';

const SubTopics = (props) => {  

  return (
    <div  className = { styles.wrapper }>
      <SubTopic/>
    </div>
  )
};

export default SubTopics;
