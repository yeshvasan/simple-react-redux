const initialState = {
    number: 10
};

const Reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'MULTIPLE_OF_10':
        newState.number *= action.value;
        break;

        case 'MULTIPLE_OF_100':
            newState.number *= action.value;
            break;
    }
    return newState;

}

export default Reducer;