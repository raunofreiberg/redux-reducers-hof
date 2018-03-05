import React from 'react';
import { connect } from 'react-redux';

import { ADD_TODO, REMOVE_TODO } from './ducks/todos';

const App = ({ todos, addTodo, removeTodo }) => (
    <ul>
        {!!todos.length && todos.map(todo =>
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => removeTodo(todo.id)}>x</button>
            </li>
        )}
        <button onClick={() => addTodo("Wat")}>Add Todo</button>
    </ul>
);

const mapStateToProps = state => ({
   todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
   addTodo: text => dispatch({ type: ADD_TODO, text }),
   removeTodo: id => dispatch({ type: REMOVE_TODO, id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);