// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    return(

        <div >
            {props.tasks.map(item => (
                <Todo key = {item.id} item = {item} toggleItem = {props.toggleItem} />
            ))}
            <button className = "clear" onClick = {props.clearDone}>
                Clear Completed
            </button>


        </div>
    )
}

export default TodoList;