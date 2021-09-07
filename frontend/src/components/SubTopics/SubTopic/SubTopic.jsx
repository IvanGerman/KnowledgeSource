import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubTopic.module.css';
import Tilt from 'react-parallax-tilt';


const SubTopic = (props) => {  

  const setIdForMaping = () => {
    props.setIdForMaping(props.id);
  };

  return (
    <Tilt>
    <div  className = { styles.wrapper }>
      <NavLink to = "/contentblocks" >
        <div className = { styles.subtopic } onClick = { setIdForMaping }>
          <div className = { styles.picture }></div>
          <div className = { styles.subtopicName }>
            <div>{props.name}</div>
            <div className = { styles.lastVisitDate }>Last visited on {props.lastVisitDate}</div>
          </div>
          <div className = { styles.subtopicStats }>
            <div className = { styles.subtopicStatsInnerDiv }>
              <div>{props.contentBlocksNumber}</div>
              <div>content blocks</div>
            </div>
            <div className = { styles.subtopicStatsInnerDiv } id = { styles.subtopicStatsInnerDivMiddle }>
              <div>{props.views}</div>
              <div>views</div>
            </div>
            <div className = { styles.subtopicStatsInnerDiv }>
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

export default SubTopic;
