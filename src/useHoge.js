import { createContext, useContext } from "preact/compat";
import { CountContext, ActionContext, actions } from "./context";

export function useHoge() {
  const countContext = useContext(CountContext);
  const actionContext = useContext(ActionContext);
  const { state } = countContext;
  const { dispatch } = actionContext;
  console.log(dispatch);

  const increment = () => {
    dispatch(actions.increment());
  };
  return [state.count, increment];
}
