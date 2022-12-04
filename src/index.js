import { createStore } from "redux";
// createSotre에 계속 취소선 나와서 검색해 보니, reduxtoolkit사용 권장을 위해서라고 한다.
// 따라서 나는 버전을 낮췄지만, 그러지 않을 경우는 다음과 같이 사용할 수 있다.
// import { legacy_createStore as createStore } from 'redux';
// 출처: https://okky.kr/article/1209744
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 오타방지 정의
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// function단위로 나눠서 사용
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// reducer 함수
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      // mutatating절대 하지 않고 배열 새로 그려야 함
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

// redux 사용을 위한 정의
const store = createStore(reducer);

//
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

store.subscribe(() => console.log(store.getState()));

// 화면에 todo리스트 그려주기 위한 작업
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

// subscribe로 화면에 그려줄 자료 전달
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
