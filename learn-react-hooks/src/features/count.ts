interface CountState {
  count: number;
}

interface CountAction {
  type: string;
  payload?: number;
}

enum CountActions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  UPDATE_AMOUNT = "UPDATE_AMOUNT",
}

export const initialCountState: CountState = {
  count: 0,
};

export const countReducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case CountActions.INCREMENT:
      return {
        count: state.count + 1,
      };
    case CountActions.DECREMENT:
      return {
        count: state.count - 1,
      };
    case CountActions.RESET:
      return {
        count: initialCountState.count,
      };
    case CountActions.UPDATE_AMOUNT:
      if ("payload" in action && action.payload) {
        return {
          count: state.count + action.payload,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const incrementCount = () => ({
  type: CountActions.INCREMENT,
});

export const decrementCount = () => ({
  type: CountActions.DECREMENT,
});

export const resetCount = () => ({
  type: CountActions.RESET,
});

export const updateByAmountCount = (updateValue: number) => ({
  type: CountActions.UPDATE_AMOUNT,
  payload: updateValue,
});
