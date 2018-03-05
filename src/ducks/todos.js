import createReducer from '../createReducer';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
let todoId = 0;

const initialState = {
    todos: [],
};

export default createReducer({
    [ADD_TODO]: (state, action) => ([
        ...state,
        {
            text: action.text,
            id: todoId++,
        }
    ]),
    [REMOVE_TODO]: (state, action) => ([ ...state.filter(t => t.id !== action.id )]),
}, initialState);

