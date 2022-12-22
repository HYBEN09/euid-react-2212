class Store {
  #state;
  #reducer;
  #listeners = [];

  constructor(reducer, initialState = {}) {
    this.#reducer = reducer;
    this.#state = initialState;
  }

  getState() {
    return this.#state;
  }

  dispatch(action) {
    this.#state = this.#reducer(this.getState(), action);
    this.#listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.#listeners.push(listener);
    return () => {
      this.#listeners = this.#listeners.filter((l) => !Object.is(l, listener));
    };
  }
}

export function createStore(...args) {
  return new Store(...args);
}
