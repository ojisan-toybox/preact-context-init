import { createContext, h, render } from "preact";
import { Child } from "./child";

export const Context = createContext({ cnt: 1 });

render(
  <Context.Provider value={{ cnt: 2 }}>
    <Child></Child>
  </Context.Provider>,
  document.body
);
