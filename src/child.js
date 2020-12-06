import { h } from "preact";
import { useContext } from "preact/compat";
import { ActionContext, actions, CountContext } from "./context";
import { useHoge } from "./useHoge";

export const Child = () => {
  const [count, increment] = useHoge();

  return (
    <div>
      {count}
      <button
        onclick={() => {
          increment();
        }}
      >
        increment
      </button>
    </div>
  );
};
