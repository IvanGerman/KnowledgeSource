const ADD_TOPIC = 'ADD_TOPIC';

let initialState = {
    topics: [
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
          subTopicsNumber: 8
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
    ]
};

const topicReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_TOPIC:

            return {
                ...state,
                topics: [...state.topics,{
                    id: 'topic2(uuid)',
                    name: 'React',
                    creationDate: '01.07.2020',
                    lastVisitDate: '',
                    views: 0,
                    subTopicsNumber: 0
                  } ]
            };
        
        default: 
            return state;
    };
};

export const addTopicAC = () => ({type: ADD_TOPIC});

//thunkCreators:


export default topicReducer;