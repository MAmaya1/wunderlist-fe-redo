import React from 'react';
import { Link } from 'react-router-dom';

// Import Components

import Todo from './Todo';

// TaskList Component

const TaskList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    item={todo.item}
                    description={todo.description}
                    due_date={todo.due_date}
                />
            ))}
        </div>
    )
}

export default TaskList;