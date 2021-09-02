import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubTopic.module.css';
import Tilt from 'react-parallax-tilt';


const SubTopic = (props) => {  

  return (
    <Tilt>
    <div  className = { styles.wrapper }>
      <NavLink to = "/contentblocks" >
        <div className = { styles.subtopic } >
          <div className = { styles.picture }></div>
          <div className = { styles.subtopicName }>
            <div>{props.name}</div>
            <div className = { styles.lastVisitDate }>Last visited on 12.08.2021</div>
          </div>
          <div className = { styles.subtopicStats }>
            <div className = { styles.subtopicStatsInnerDiv }>
              <div>15</div>
              <div>content blocks</div>
            </div>
            <div className = { styles.subtopicStatsInnerDiv } id = { styles.subtopicStatsInnerDivMiddle }>
              <div>156</div>
              <div>views</div>
            </div>
            <div className = { styles.subtopicStatsInnerDiv }>
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

export default SubTopic;
