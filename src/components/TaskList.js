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
                    id={todo.id}
                    item={todo.item}
                    description={todo.description}
                    due_date={todo.due_date}
                />
            ))}
            <Link to="add-todo">Add New Item</Link>
        </div>
    )
}

export default TaskList;