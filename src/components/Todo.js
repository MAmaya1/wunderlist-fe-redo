import React from 'react';

// Todo Component

const Todo = props => {
    return (
        <div>
            <p>{props.item}</p>
            <p>{props.description}</p>
            <p>{props.due_date}</p>
        </div>
    )
}

export default Todo;