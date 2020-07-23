import { createClient, dedupExchange, fetchExchange } from "urql";
import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange } from "@urql/exchange-graphcache";
import { getToken } from "Util/auth";

const cache = cacheExchange({});

export const client = createClient({
  url: process.env.REACT_APP_BACKEND_URL || "",
  exchanges: [devtoolsExchange, dedupExchange, cache, fetchExchange],
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});
