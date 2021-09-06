const SET_ID = 'SET_ID';

let initialState = {
  idForMaping: ''
};

const idForMapingReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_ID:

            return {
                ...state,
                idForMaping: action.idForMaping
            };
        
        default: 
            return state;
    };
};


//actionCreators:----------------------------------------------------------------------------------------------

export const setIdForMapingAC = (idForMaping) => {
  
  return {type: SET_ID, idForMaping: idForMaping};

};

//thunkCreators:-----------------------------------------------------------------------------------------------


export default idForMapingReducer;