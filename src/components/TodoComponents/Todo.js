import React from 'react';
import { placeholder } from '@babel/types';

const Todo = props => {
    return(
        <div
            style = {props.item.done ? { textDecoration: 'line-through' }: null}
            onClick = { () => props.toggleItem(props.item.id)}
        
        >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;