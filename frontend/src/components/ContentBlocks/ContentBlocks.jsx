import React from 'react';
import BackButton from '../BackButton/BackButton';
import AudioBlock from './AudioBlock/AudioBlock';
import styles from './ContentBlocks.module.css';
import Link from './Link/Link';
import Picture from './Picture/Picture';
import Text from './Text/Text';
import VideoBlock from './VideoBlock/VideoBlock';

const ContentBlocks = (props) => {  

  const arrForMap = props.contentBlocks.filter(elem => elem.subtopicId === props.idForMaping);;

  // const allContentBlocks = arrForMap.map((t, i) =>

  //   <SubTopicContainer id={arrForMap[i].id} name={arrForMap[i].name}  
  //                     creationDate={arrForMap[i].creationDate}
  //                     lastVisitDate={arrForMap[i].lastVisitDate}
  //                     views={arrForMap[i].views} contentBlocksNumber={arrForMap[i].contentBlocksNumber}
  //                     key={i} />);

  return (
    <div className={styles.wrapper}>
      <div className={styles.allContentBlocks}>
        <Text />
        <Link />
        <Picture />
        <AudioBlock />
        <VideoBlock />
      </div>
      <div className={styles.backButtonOuter}>
        <BackButton />
      </div>
    </div>
  )
};

export default ContentBlocks;
