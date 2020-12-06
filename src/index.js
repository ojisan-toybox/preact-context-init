import { createContext, h, render } from "preact";
import { Child } from "./child";

export const Context = createContext(1);

render(
  <Context.Provider value={2}>
    <Child></Child>
  </Context.Provider>,
  document.body
);
