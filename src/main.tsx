import { GlobalStyle } from "./styles/Global";

import ReactDOM from "react-dom/client";
import App from "./App";

import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement | DocumentFragment
).render(
  <>
    <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith("data-")}>
      <GlobalStyle />
      <App />
    </StyleSheetManager>
  </>
);
