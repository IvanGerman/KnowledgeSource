import React from 'react';
import BackButton from '../BackButton/BackButton';
import Topic from './Topic/Topic';
import styles from './Topics.module.css';


const Topics = (props) => {

  const arr = [
    {
      id: 'topic1',
      name: 'JavaScript',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      subTopicsNumber: 15
    },
    {
      id: 'topic2',
      name: 'React',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      subTopicsNumber: 15
    },
    {
      id: 'topic3',
      name: 'CSS',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      subTopicsNumber: 15
    },
    {
      id: 'topic4',
      name: 'JavaScript2',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      subTopicsNumber: 15
    },
    {
      id: 'topic5',
      name: 'React2',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      subTopicsNumber: 15
    },
    {
      id: 'topic6',
      name: 'CSS2',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      subTopicsNumber: 15
    }, {
      id: 'topic7',
      name: 'JavaScript',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      subTopicsNumber: 15
    },
    {
      id: 'topic8',
      name: 'React',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      subTopicsNumber: 15
    },
    {
      id: 'topic9',
      name: 'CSS',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      subTopicsNumber: 15
    },
    {
      id: 'topic10',
      name: 'JavaScript2',
      creationDate: '02.09.2021',
      lastVisitDate: '02.09.2021',
      views: 12,
      subTopicsNumber: 15
    },
    {
      id: 'topic11',
      name: 'React2',
      creationDate: '01.07.2020',
      lastVisitDate: '22.05.2021',
      views: 53,
      subTopicsNumber: 15
    },
    {
      id: 'topic12',
      name: 'CSS2',
      creationDate: '07.11.2019',
      lastVisitDate: '15.07.2021',
      views: 133,
      subTopicsNumber: 15
    }
  ];

  const allTopics = arr.map((t, i) => <Topic name={arr[i].name} id={arr[i].id} key={i} />);

  return (
    <div className={styles.wrapper}>
      <div className={styles.allTopics}>
        {allTopics}
      </div>
      <div className={styles.backButton}>
        <BackButton />
      </div>
    </div>
  )
};

export default Topics;
