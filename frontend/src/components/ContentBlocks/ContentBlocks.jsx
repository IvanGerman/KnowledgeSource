import React from 'react';
import BackButton from '../BackButton/BackButton';
import AudioBlock from './AudioBlock/AudioBlock';
import styles from './ContentBlocks.module.css';
import Link from './Link/Link';
import Picture from './Picture/Picture';
import Text from './Text/Text';
import VideoBlock from './VideoBlock/VideoBlock';

const ContentBlocks = (props) => {  

  const arrForMap = props.contentBlocks.filter(elem => elem.subtopicId === props.idForMaping);

  const allContentBlocks = arrForMap.map((elem, i) => { 

    switch (elem.kindOfBlock) {

      case 'text':
        return <Text id={arrForMap[i].id} kindOfBlock={arrForMap[i].kindOfBlock} 
              subtopicId={arrForMap[i].subtopicId} content={arrForMap[i].content}
              commentInfo={arrForMap[i].commentInfo} creationDate={arrForMap[i].creationDate}
              lastVisitDate={arrForMap[i].lastVisitDate} views={arrForMap[i].views}
              memoModeOn={arrForMap[i].memoModeOn} selectionTime={arrForMap[i].selectionTime}
              repeatLevel={arrForMap[i].repeatLevel} countdownColor={arrForMap[i].countdownColor}
              key={i} />;

      case 'link':
        return <Link id={arrForMap[i].id} kindOfBlock={arrForMap[i].kindOfBlock}
              subtopicId={arrForMap[i].subtopicId} content={arrForMap[i].content}
              commentInfo={arrForMap[i].commentInfo} creationDate={arrForMap[i].creationDate}
              lastVisitDate={arrForMap[i].lastVisitDate} views={arrForMap[i].views}
              memoModeOn={arrForMap[i].memoModeOn} selectionTime={arrForMap[i].selectionTime}
              repeatLevel={arrForMap[i].repeatLevel} countdownColor={arrForMap[i].countdownColor}
              key={i} />;

      case 'picture':
        return <Picture id={arrForMap[i].id} kindOfBlock={arrForMap[i].kindOfBlock}
                subtopicId={arrForMap[i].subtopicId} content={arrForMap[i].content}
                commentInfo={arrForMap[i].commentInfo} creationDate={arrForMap[i].creationDate}
                lastVisitDate={arrForMap[i].lastVisitDate} views={arrForMap[i].views}
                memoModeOn={arrForMap[i].memoModeOn} selectionTime={arrForMap[i].selectionTime}
                repeatLevel={arrForMap[i].repeatLevel} countdownColor={arrForMap[i].countdownColor}
                key={i} />;

      case 'audio':
        return <AudioBlock id={arrForMap[i].id} kindOfBlock={arrForMap[i].kindOfBlock}
                subtopicId={arrForMap[i].subtopicId} content={arrForMap[i].content}
                commentInfo={arrForMap[i].commentInfo} creationDate={arrForMap[i].creationDate}
                lastVisitDate={arrForMap[i].lastVisitDate} views={arrForMap[i].views}
                memoModeOn={arrForMap[i].memoModeOn} selectionTime={arrForMap[i].selectionTime}
                repeatLevel={arrForMap[i].repeatLevel} countdownColor={arrForMap[i].countdownColor}
                key={i} />;

      case 'video':
        return <VideoBlock id={arrForMap[i].id} kindOfBlock={arrForMap[i].kindOfBlock}
                subtopicId={arrForMap[i].subtopicId} content={arrForMap[i].content}
                commentInfo={arrForMap[i].commentInfo} creationDate={arrForMap[i].creationDate}
                lastVisitDate={arrForMap[i].lastVisitDate} views={arrForMap[i].views}
                memoModeOn={arrForMap[i].memoModeOn} selectionTime={arrForMap[i].selectionTime}
                repeatLevel={arrForMap[i].repeatLevel} countdownColor={arrForMap[i].countdownColor}
                key={i}/>;

      default:
        return null;
    }
  });
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.allContentBlocks}>
        {allContentBlocks}
        {/* <Text />
        <Link />
        <Picture />
        <AudioBlock />
        <VideoBlock /> */}
      </div>
      <div className={styles.backButtonOuter}>
        <BackButton />
      </div>
    </div>
  )
};

export default ContentBlocks;
