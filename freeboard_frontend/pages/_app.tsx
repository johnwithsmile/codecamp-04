import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    // userInfo: myuserInfo,
    // setMyUserInfo: setMyUserInfo,
  };
  useEffect(() =>  {
    const accessToken = localStorage.getItem("myAccessToken") || "";
    if(accessToken) setMyAccessToken(accessToken)

  }, [])
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as any]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
