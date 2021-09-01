import React from 'react';
import { NavLink } from 'react-router-dom';
import BackButton from '../../BackButton/BackButton';
import styles from './SubTopic.module.css';
//import { NavLink } from 'react-router-dom';

const SubTopic = (props) => {  

  return (
    <div  className = { styles.wrapper }>
      Single SubTopic
      <br/>
      <NavLink to = "/contentblocks" >To the ContentBlocks</NavLink>
      <BackButton/>
    </div>
  )
};

export default SubTopic;
