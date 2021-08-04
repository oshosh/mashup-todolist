(this["webpackJsonpmashup-todolist"]=this["webpackJsonpmashup-todolist"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),c=t(11),i=t.n(c),a=t(2),d=t(3),s=t(4),b=t(9),x=t(1),u=[{id:1,text:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",done:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1\ud558\uae30",done:!0},{id:3,text:"Context \ub9cc\ub4e4\uae30",done:!1},{id:4,text:"\uae30\ub2a5 \uad6c\ud604\ud558\uae30",done:!1}];function l(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(b.a)(Object(b.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type: ".concat(e.type))}}var j=Object(o.createContext)(),p=Object(o.createContext)(),f=Object(o.createContext)();function O(n){var e=n.children,t=Object(o.useReducer)(l,u),r=Object(s.a)(t,2),c=r[0],i=r[1],a=Object(o.useRef)(u.length+1);return Object(x.jsx)(j.Provider,{value:c,children:Object(x.jsx)(p.Provider,{value:i,children:Object(x.jsx)(f.Provider,{value:a,children:e})})})}function h(){var n=Object(o.useContext)(j);if(!n)throw new Error("Cannot find TodoStateContext.Provider");return n}function g(){var n=Object(o.useContext)(p);if(!n)throw new Error("Cannot find TodoDispatchContext.Provider");return n}var v,m,y,w,k,C=t(5),E=d.c.button(v||(v=Object(a.a)(["\n    background: #38d9a9;\n    &:hover {\n        background: #63e6be;\n    }\n    &:active {\n        background: #20c997;\n    }\n\n    z-index: 5;\n    cursor: pointer;\n    width: 80px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    //https://firerope.tistory.com/4\n    position: absolute;\n    left: 50%;\n    bottom: 0px;\n    transform: translate(-50%, 50%);\n    /* margin-left: -40px ;\n    margin-bottom: -40px ; */\n    /* translateX:-50%;\n    translateY:-50%; */\n\n    font-size: 60px;\n    color: #fff;\n    border-radius: 50%;\n\n    border: none;\n    outline: none;\n\n    transition: 0.125s all ease-in;\n    ","\n"])),(function(n){return n.open&&Object(d.b)(m||(m=Object(a.a)(["\n        background: #ff6b6b;\n        &:hover{\n            background: #ff8787;\n        }\n        &:active {\n            background: #fa5252;\n        }\n        transform: translate(-50%, 50%) rotate(45deg);\n    "])))})),z=d.c.div(y||(y=Object(a.a)(["\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n"]))),R=d.c.form(w||(w=Object(a.a)(["\n    background: #f8f9fa;\n    padding: 32px;\n    padding-bottom: 72px;\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n    border-top: 1px solid #e9ecef;\n"]))),T=d.c.input(k||(k=Object(a.a)(["\n    padding: 12px;\n    border-radius: 4px;\n    border: 1px solid #dee2e6;\n    width: 100%;\n    outline: none;\n    font-size: 18px;\n    // \ud328\ub529\uc744 \uc8fc\uace0 \uc0ac\uc774\uc988\ub97c \uc99d\uac00\uc2dc\ud0ac\ub54c border-box \uace0\ub824 \ud544\uc694\n    box-sizing: border-box;\n"])));function S(){var n=Object(o.useState)(!1),e=Object(s.a)(n,2),t=e[0],r=e[1],c=g(),i=function(){var n=Object(o.useContext)(f);if(!n)throw new Error("Cannot find TodoNextIdContext.Provider");return n}(),a=Object(o.useState)(""),d=Object(s.a)(a,2),b=d[0],u=d[1];return Object(x.jsxs)(x.Fragment,{children:[t&&Object(x.jsx)(z,{children:Object(x.jsx)(R,{onSubmit:function(n){n.preventDefault(),c({type:"CREATE",todo:{id:i.current,text:b,done:!1}}),u(""),r(!1),i.current+=1},children:Object(x.jsx)(T,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",autoFocus:!0,onChange:function(n){return u(n.target.value)},value:b})})}),Object(x.jsx)(E,{onClick:function(){r(!t)},open:t,children:Object(x.jsx)(C.a,{})})]})}var D,P=r.a.memo(S),G=d.c.div(D||(D=Object(a.a)(["\n    padding: 48px 32px 24px 32px;\n    border-bottom: 1px solid #e9ecef;\n    h1 {\n        margin: 0;\n        font-size: 36px;\n        color: #343a40;\n    }\n    .day {\n        margin-top: 4px;\n        color: #868e96;\n        font-size: 21px;\n    }\n    .tasks-left {\n        color: #20c997;\n        font-size: 18px;\n        margin-top: 40px;\n        font-weight: 700;\n    }\n"])));var L,I,M,N,A,B,F=function(){var n=h().filter((function(n){return!n.done})),e=(new Date).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),t=(new Date).toLocaleDateString("ko-KR",{weekday:"long"});return Object(x.jsxs)(G,{children:[Object(x.jsx)("h1",{children:e}),Object(x.jsx)("div",{className:"day",children:t}),Object(x.jsxs)("div",{className:"tasks-left",children:["\ud560 \uc77c ",n.length,"\uac1c \ub0a8\uc74c"]})]})},J=d.c.div(L||(L=Object(a.a)(["\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: 1px solid #ced4da;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n    cursor: pointer;\n    ","\n"])),(function(n){return n.done&&Object(d.b)(I||(I=Object(a.a)(["\n        border: 1px solid #38d9a9;\n        color: #38d9a9;\n    "])))})),K=d.c.div(M||(M=Object(a.a)(["\n    flex: 1;\n    font-size: 21px;\n    color: #495057;\n    ","\n"])),(function(n){return n.done&&Object(d.b)(N||(N=Object(a.a)(["\n        color: #ced4da;\n    "])))})),V=d.c.div(A||(A=Object(a.a)(["\n    // \ucc98\uc74c\uc5d0\ub294 0 TodoItemBlock \ucee4\uc11c \uc120\ud0dd\uc2dc \ubcf4\uc774\uac8c\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #dee2e6;\n    font-size: 24px;\n    cursor: pointer;\n    &:hover {\n        color: #ff6b6b;\n    }\n"]))),U=d.c.div(B||(B=Object(a.a)(["\n    display: flex;\n    align-items: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    &:hover {\n        "," {\n            opacity: 1;\n        }\n    }\n"])),V);var X,Y=function(n){var e=n.id,t=n.done,o=n.text,r=g();return Object(x.jsxs)(U,{children:[Object(x.jsx)(J,{done:t,onClick:function(){return r({type:"TOGGLE",id:e})},children:t&&Object(x.jsx)(C.c,{})}),Object(x.jsx)(K,{done:t,children:o}),Object(x.jsx)(V,{children:Object(x.jsx)(C.b,{onClick:function(){return r({type:"REMOVE",id:e})}})})]})},q=d.c.div(X||(X=Object(a.a)(["\n    /* flex: 1; */\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    padding: 20px 32px;\n    padding-bottom: 48px;\n    overflow-y: auto; // \ud56d\ubaa9\uc774 \ub9ce\uc544\uc9c0\uba74 \uc2a4\ud06c\ub864\ubc14\n"])));var H,Q=function(){var n=h();return Object(x.jsx)(q,{children:n.map((function(n){return Object(x.jsx)(Y,{id:n.id,text:n.text,done:n.done},n.id)}))})},W=d.c.div(H||(H=Object(a.a)(["\n  width: 512px;\n  height: 768px;\n  \n  position: relative;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 0 8px rgba(0,0,0,.4);\n\n  margin: 0 auto;\n  margin-top: 96px;\n  margin-bottom: 32px;\n\n  display: flex;\n  flex-direction: column;\n"])));var Z,$=function(n){var e=n.children;return Object(x.jsx)(W,{children:e})},_=Object(d.a)(Z||(Z=Object(a.a)(["\n  body {\n    background: #e9ecef;\n  }\n"])));var nn=function(){return Object(x.jsxs)(O,{children:[Object(x.jsx)(_,{}),Object(x.jsxs)($,{children:[Object(x.jsx)(F,{}),Object(x.jsx)(Q,{}),Object(x.jsx)(P,{})]})]})};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(nn,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.223f6a35.chunk.js.map