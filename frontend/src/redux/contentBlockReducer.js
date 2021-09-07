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
          id: 'contentBlock2',
          kindOfBlock: 'link',
          subtopicId: 'subtopic1',
          content: 'https://mail.ru/',
          commentInfo: 'some info about mail.ru',
          creationDate: '14.11.2021',
          lastVisitDate: '15.11.2021',
          views: 124,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock3',
          kindOfBlock: 'picture',
          subtopicId: 'subtopic1',
          content: 'link to picture',
          commentInfo: 'picture about spread operator',
          creationDate: '09.02.2021',
          lastVisitDate: '02.09.2021',
          views: 55,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock4',
          kindOfBlock: 'audio',
          subtopicId: 'subtopic1',
          content: 'link to audio file',
          commentInfo: 'some audio about spread operator',
          creationDate: '02.09.2021',
          lastVisitDate: '02.09.2021',
          views: 45,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock5',
          kindOfBlock: 'video',
          subtopicId: 'subtopic1',
          content: 'link to video file',
          commentInfo: 'video about spread operator',
          creationDate: '11.09.2021',
          lastVisitDate: '11.09.2021',
          views: 5,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock6',
          kindOfBlock: 'text',
          subtopicId: 'subtopic1',
          content: 'bla,bla,bla222',
          commentInfo: 'more info about spread operator',
          creationDate: '06.09.2021',
          lastVisitDate: '02.09.2021',
          views: 14,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        }, {
          id: 'contentBlock7',
          kindOfBlock: 'text',
          subtopicId: 'subtopic2',
          content: 'bla,bla,bla',
          commentInfo: 'some info about reducers',
          creationDate: '02.09.2021',
          lastVisitDate: '02.09.2021',
          views: 77,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock8',
          kindOfBlock: 'link',
          subtopicId: 'subtopic2',
          content: 'link to the site',
          commentInfo: 'to the website with info about reducers',
          creationDate: '23.09.2021',
          lastVisitDate: '02.09.2021',
          views: 656,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock9',
          kindOfBlock: 'video',
          subtopicId: 'subtopic2',
          content: 'link to video file',
          commentInfo: 'video about reducers',
          creationDate: '11.12.2021',
          lastVisitDate: '11.09.2021',
          views: 52,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock10',
          kindOfBlock: 'audio',
          subtopicId: 'subtopic2',
          content: 'link to audio file',
          commentInfo: 'audio about reducers',
          creationDate: '02.02.2021',
          lastVisitDate: '02.09.2021',
          views: 453,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock11',
          kindOfBlock: 'text',
          subtopicId: 'subtopic2',
          content: 'bla,bla,bla',
          commentInfo: 'some info about reducers',
          creationDate: '02.09.2014',
          lastVisitDate: '02.09.2021',
          views: 132,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
        },
        {
          id: 'contentBlock12',
          kindOfBlock: 'picture',
          subtopicId: 'subtopic2',
          content: 'link to picture',
          commentInfo: 'picture about reducers',
          creationDate: '31.02.2021',
          lastVisitDate: '02.09.2021',
          views: 515,
          memoModeOn: false,
          selectionTime: null,
          repeatLevel: 0,
          countdownColor: null
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