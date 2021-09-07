const ADD_CONTENT_BLOCK = 'ADD_CONTENT_BLOCK';

let initialState = {
    contentBlocks: [
        {
          id: 'contentBlock1',
          kindOfBlock: 'text',
          subtopicId: 'subtopic1',
          content: 'bla,bla,bla',
          commentInfo: 'some info about spread operator',
          creationDate: '02.09.2021',
          lastVisitDate: '02.09.2021',
          views: 12,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
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

const contentBlockReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_CONTENT_BLOCK:

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

export const addcontentBlockAC = () => ({type: ADD_CONTENT_BLOCK});

//thunkCreators:


export default contentBlockReducer;