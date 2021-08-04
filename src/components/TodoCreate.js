import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md'
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    //https://firerope.tistory.com/4
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    /* margin-left: -40px ;
    margin-bottom: -40px ; */
    /* translateX:-50%;
    translateY:-50%; */

    font-size: 60px;
    color: #fff;
    border-radius: 50%;

    border: none;
    outline: none;

    transition: 0.125s all ease-in;
    ${props => props.open &&
        css`
        background: #ff6b6b;
        &:hover{
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    // 패딩을 주고 사이즈를 증가시킬때 border-box 고려 필요
    box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false)
    const onToggle = () => {
        setOpen(!open)
    }

    const dispatch = useTodoDispatch()
    const nextId = useTodoNextId()

    //Input compontent 이벤트 동작 구현
    const [value, setValue] = useState('')
    const onChange = (e) => setValue(e.target.value)

    // InsertForm (todolist) 입력 적용부
    const onSubmit = e => {
        e.preventDefault()

        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        })
        setValue('')
        setOpen(false)
        nextId.current += 1
    }


    return (
        // TodoCreate 부모
        <>
            {
                open && (
                    <InsertFormPositioner>
                        <InsertForm onSubmit={onSubmit}>
                            <Input
                                placeholder="할 일을 입력 후, Enter 를 누르세요"
                                autoFocus
                                onChange={onChange}
                                value={value}
                            />
                        </InsertForm>
                    </InsertFormPositioner>
                )
            }
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>

    );
}

export default React.memo(TodoCreate);