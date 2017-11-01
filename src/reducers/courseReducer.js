export default function courseReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE':
        return [...state, Object.assign({}, action.course)];
            // ... is the spread operator. basicaly the above statememnt can be decoded as below:
            // ...state : will take all the values in the state and create a nbew state array
            // Object.assign() : will take the new state and add the course into the new state array which we will be return.
            // States are immutable in Redux

        default: 
            return state;
    }
}