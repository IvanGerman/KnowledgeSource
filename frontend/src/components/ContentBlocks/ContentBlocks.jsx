import React from 'react';
import BackButton from '../BackButton/BackButton';
import AudioBlock from './AudioBlock/AudioBlock';
import styles from './ContentBlocks.module.css';
import Link from './Link/Link';
import Picture from './Picture/Picture';
import Text from './Text/Text';
import VideoBlock from './VideoBlock/VideoBlock';

const ContentBlocks = (props) => {  

  return (
    <div  className = { styles.wrapper }> 
      <Text/>
      <Link/>
      <Picture/>
      <AudioBlock/>
      <VideoBlock/>
      <BackButton/>
    </div>
  )
};

export default ContentBlocks;
