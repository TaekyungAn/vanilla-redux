import { createStore } from "redux";
// createSotre에 계속 취소선 나와서 검색해 보니, reduxtoolkit사용 권장을 위해서라고 한다.
// 따라서 나는 버전을 낮췄지만, 그러지 않을 경우는 다음과 같이 사용할 수 있다.
// import { legacy_createStore as createStore } from 'redux';
// 출처: https://okky.kr/article/1209744
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
