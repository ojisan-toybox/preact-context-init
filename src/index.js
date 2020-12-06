import { createContext, h, render } from "preact";
import { Child } from "./child";
import { ContextProvider } from "./context";

render(
  <ContextProvider>
    <Child></Child>
  </ContextProvider>,
  document.body
);
