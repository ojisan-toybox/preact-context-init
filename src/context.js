import { h } from "preact";
import { createContext, useReducer } from "preact/compat";

const INCREMENT = "INCREMENT";

const increment = () => {
  return { type: INCREMENT };
};

export const actions = {
  increment,
};

const inialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export const CountContext = createContext({ state: { count: 100 } });

export const ActionContext = createContext({
  dispatch: () => {},
});

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, inialState);
  return (
    <CountContext.Provider value={{ state: state }}>
      <ActionContext.Provider value={{ dispatch }}>
        {children}
      </ActionContext.Provider>
    </CountContext.Provider>
  );
}
