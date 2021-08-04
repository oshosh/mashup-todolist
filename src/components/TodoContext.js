import React, { createContext, useReducer, useContext, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
];
/*
    CREATE
    TOGGLE
    REMOVE
 */
function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            )
        case 'REMOVE':
            return state.filter(
                todo => todo.id !== action.id
            )
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

// context api 설정
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// context api 컴포넌트 설정
export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos)
    const nextId = useRef(initialTodos.length + 1)

    return (
        /* children 아래 value(state, dispatch) 사용이 가능해짐 = contextAPI */
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// state context api
/* 호출 방법
        import {useTodoState} from '.............../TodoContext'
        const state = useTodoState();
    */
export function useTodoState() {
    const context = useContext(TodoStateContext)

    if (!context) {
        throw new Error('Cannot find TodoStateContext.Provider')
    }
    return context

}

// dispatch context api
export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext)

    if (!context) {
        throw new Error('Cannot find TodoDispatchContext.Provider')
    }
    return context
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext)

    if (!context) {
        throw new Error('Cannot find TodoNextIdContext.Provider')
    }
    return context
}