import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    /* flex: 1; */
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto; // 항목이 많아지면 스크롤바
`;

function TodoList() {
    const todos = useTodoState()
    return (
        <TodoListBlock>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
                    )
                })
            }
        </TodoListBlock>
    );
}

export default TodoList;