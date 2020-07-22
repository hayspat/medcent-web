import { createClient, defaultExchanges } from "urql";
import { devtoolsExchange } from "@urql/devtools";

export const client = createClient({
  url: process.env.REACT_APP_BACKEND_URL || "",
  exchanges: [devtoolsExchange, ...defaultExchanges],
  fetchOptions: () => {
    const token = localStorage.getItem("token");
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});
