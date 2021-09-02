const ADD_SUBTOPIC = 'ADD_SUBTOPIC';

let initialState = {
    subtopics: [
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
    ]
};

const subtopicReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_SUBTOPIC:

            return {
                ...state,
                subtopics: [...state.subtopics,{
                  id: 'subtopic2(uuid)',
                  name: 'Destructuring Assigment',
                  creationDate: '01.07.2020',
                  lastVisitDate: '',
                  views: 0,
                  contentBlocksNumber: 0,
                  topicId: 'topic1'
                  } ]
            };
        
        default: 
            return state;
    };
};

export const addSubtopicAC = () => ({type: ADD_SUBTOPIC});

//thunkCreators:


export default subtopicReducer;