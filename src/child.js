import { h } from "preact";
import { useContext } from "preact/compat";
import { Context } from ".";

export const Child = () => {
  const context = useContext(Context);
  return <div>{context}</div>;
};
