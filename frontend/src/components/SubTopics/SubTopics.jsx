import React from 'react';
import BackButton from '../BackButton/BackButton';
import SubTopic from './SubTopic/SubTopic';
import styles from './SubTopics.module.css';


const SubTopics = (props) => {  

  const arr = [
    {
      id: 'subtopic1',
      name: 'Data Types',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      contentBlocksNumber: 15,
      topicId: 'topic1'
    },
    {
      id: 'subtopic2',
      name: 'Destructuring Assigment',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      contentBlocksNumber: 15,
      topicId: 'topic1'
    },
    {
      id: 'subtopic3',
      name: 'rest operator',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      contentBlocksNumber: 15,
      topicId: 'topic1'
    },
    {
      id: 'subtopic4',
      name: 'Components',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      contentBlocksNumber: 15,
      topicId: 'topic2'
    },
    {
      id: 'subtopic5',
      name: 'Hooks',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      contentBlocksNumber: 15,
      topicId: 'topic2'
    },
    {
      id: 'subtopic6',
      name: 'Context API',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      contentBlocksNumber: 15,
      topicId: 'topic2'
    }, 
    {
      id: 'subtopic7',
      name: 'Classes',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      contentBlocksNumber: 15,
      topicId: 'topic1'
    },
    {
      id: 'subtopic8',
      name: 'Arrays',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      contentBlocksNumber: 15,
      topicId: 'topic1'
    },
    {
      id: 'subtopic9',
      name: 'Recursion',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      contentBlocksNumber: 15,
      topicId: 'topic1'
    },
    {
      id: 'subtopic10',
      name: 'Container Component',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      contentBlocksNumber: 15,
      topicId: 'topic2'
    },
    {
      id: 'subtopic11',
      name: 'Props',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      contentBlocksNumber: 15,
      topicId: 'topic2'
    },
    {
      id: 'subtopic12',
      name: 'Reselect',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      contentBlocksNumber: 15,
      topicId: 'topic2'
    }
  ];
 
  const arrForMap = arr.filter(elem => elem.topicId === props.idForMaping);;

  const allSubTopics = arrForMap.map((t, i) => <SubTopic name={arrForMap[i].name} key={i} />);

  return (
    <div  className = { styles.wrapper }>
      <div className={styles.allSubTopics}>
        {allSubTopics}
      </div>
      <div className={styles.backButton}>
        <BackButton/>
      </div>
    </div>
  )
};

export default SubTopics;
