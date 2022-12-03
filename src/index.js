import { createStore } from "redux";
// createSotre에 계속 취소선 나와서 검색해 보니, reduxtoolkit사용 권장을 위해서라고 한다.
// 따라서 나는 버전을 낮췄지만, 그러지 않을 경우는 다음과 같이 사용할 수 있다.
// import { legacy_createStore as createStore } from 'redux';
// 출처: https://okky.kr/article/1209744
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
