import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'
import { useTodoDispatch } from './TodoContext';

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;

// 원 옆에 텍스트
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        css`
        color: #ced4da;
    `}
`;

// 휴지통
const Remove = styled.div`
    // 처음에는 0 TodoItemBlock 커서 선택시 보이게
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;

// listBox 전체 블록
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;


//https://react-icons.github.io/react-icons/icons?name=md
function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch()
    const onToggle = () => dispatch({
        type: 'TOGGLE',
        id
    })
    const onRemove = () => dispatch({
        type: 'REMOVE',
        id
    })

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete onClick={onRemove} />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;