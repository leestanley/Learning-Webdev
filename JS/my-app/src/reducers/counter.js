const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            if( state > 0 ){
                return state - 1   
            }
            else {
                return state
            }
        default:
            return state   
    }
}

export default counterReducer
