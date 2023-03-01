const initialState = [ 'angular' ];

function changeFramework(state = initialState, action) {
    console.log('1', state);
    switch (action.type) {
        case 'ADD_FRAMEWORK':
                return [...state, action.payload]
                break;
            break;
        case 'DELETE-FRAMEWORKS':
            return state
            break;
        default:
            return state;
    }
}

export default changeFramework;