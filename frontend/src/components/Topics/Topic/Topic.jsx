import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Topic.module.css';
import Tilt from 'react-parallax-tilt';

const Topic = (props) => {  

  return (
    <Tilt >
    <div  className = { styles.wrapper }>
      <NavLink to = "/subtopics" >
        <div className = { styles.topic } >
          <div className = { styles.picture }></div>
          <div className = { styles.topicName }>
            <div>{props.name}</div>
            <div className = { styles.lastVisitDate }>Last visited on 12.08.2021</div>
          </div>
          <div className = { styles.topicStats }>
            <div className = { styles.topicStatsInnerDiv }>
              <div>15</div>
              <div>subtopics</div>
            </div>
            <div className = { styles.topicStatsInnerDiv } id = { styles.topicStatsInnerDivMiddle }>
              <div>156</div>
              <div>views</div>
            </div>
            <div className = { styles.topicStatsInnerDiv }>
              <div>11.12.2019</div>
              <div>created</div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
    </Tilt>
  )
};

export default Topic;
