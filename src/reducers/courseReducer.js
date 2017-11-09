import * as type from '../actions/actiontypes'
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case type.LOAD_COURSES_SUCCESS:
        return action.courses;
        //[...state, Object.assign({}, action.course)];
            // ... is the spread operator. basicaly the above statememnt can be decoded as below:
            // ...state : will take all the values in the state and create a nbew state array
            // Object.assign() : will take the new state and add the course into the new state array which we will be return.
            // States are immutable in Redux

        case type.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case type.UPDATE_COURSE_SUCCESS:
        return[
            ...state.filter(course => course.id !== action.course.id), //Wonderfull. create new array without the courseId that we want to update.Insert the new value into the array with object assign.
            Object.assign({}, action.course)
        ];

        default: 
            return state;
    }
}