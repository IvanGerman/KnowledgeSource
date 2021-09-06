import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Topic.module.css';
import Tilt from 'react-parallax-tilt';

const Topic = (props) => { 
  
  const setIdForMaping = () => {
    props.setIdForMaping(props.id);
  };

  return (
    <Tilt >
    <div  className = { styles.wrapper }>
      <NavLink to = "/subtopics" >
        <div className = { styles.topic } onClick = { setIdForMaping }>
          <div className = { styles.picture }></div>
          <div className = { styles.topicName }>
            <div>{props.name}</div>
            <div className = { styles.lastVisitDate }>Last visited on {props.lastVisitDate}</div>
          </div>
          <div className = { styles.topicStats }>
            <div className = { styles.topicStatsInnerDiv }>
              <div>{props.subTopicsNumber}</div>
              <div>subtopics</div>
            </div>
            <div className = { styles.topicStatsInnerDiv } id = { styles.topicStatsInnerDivMiddle }>
              <div>{props.views}</div>
              <div>views</div>
            </div>
            <div className = { styles.topicStatsInnerDiv }>
              <div>{props.creationDate}</div>
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
