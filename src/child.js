import { h } from "preact";
import { useContext } from "preact/compat";
import { ActionContext, actions, CountContext } from "./context";

export const Child = () => {
  const countContext = useContext(CountContext);
  const actionContext = useContext(ActionContext);

  return (
    <div>
      {countContext.state.count}
      <button
        onclick={() => {
          actionContext.dispatch(actions.increment());
        }}
      >
        increment
      </button>
    </div>
  );
};
