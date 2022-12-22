import "./style.css";
import { createStore } from "./lib/likeRedux";

/* Store -------------------------------------------------------------------- */

const countState = {
  count: 0,
};

const countReducer = (state, action /* { type, payload } */) => {
  if (action.type === "INCREMENT_COUNT") {
    return {
      count: state.count + action.payload,
    };
  }

  if (action.type === "DECREMENT_COUNT") {
    return {
      count: state.count - action.payload,
    };
  }

  if (action.type === "RESET_COUNT") {
    return {
      count: countState.count,
    };
  }

  return state;
};

const store = createStore(countReducer, countState);

/* View --------------------------------------------------------------------- */

const output = document.querySelector(".output");

// update view function
function renderOutput() {
  const { count } = store.getState();
  output.value = count;
}

/* bind event listeners ----------------------------------------------------- */

const buttonGroup = document.querySelector(".buttonGroup");

buttonGroup?.addEventListener("click", ({ target: element }) => {
  if (element.matches(".button--increment")) {
    store.dispatch({
      type: "INCREMENT_COUNT",
      payload: 10,
    });
  }

  if (element.matches(".button--decrement")) {
    store.dispatch({
      type: "DECREMENT_COUNT",
      payload: 5,
    });
  }

  if (element.matches(".button--reset")) {
    store.dispatch({
      type: "RESET_COUNT",
    });
    unsubscribeUpdateCount();
    console.info("count 업데이트 구독 취소 됨");
  }
});

/* Subscription ------------------------------------------------------------- */

const unsubscribeUpdateCount = store.subscribe(renderOutput);
