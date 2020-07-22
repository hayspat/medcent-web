import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import * as serviceWorker from "serviceWorker";
import { client } from "Util/graphql.client";
import { Provider } from "urql";
import "tailwind.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
