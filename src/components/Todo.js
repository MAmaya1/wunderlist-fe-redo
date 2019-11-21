import React from 'react';

// Todo Component

const Todo = props => {
    return (
        <div>
            <p>{props.item}</p>
            <p>{props.description}</p>
            <p>{(new Date(props.due_date)).toLocaleDateString()}</p>
        </div>
    )
}

export default Todo;