// import Head from "next/head";
import * as Sentry from "@sentry/nextjs";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://bfdff39ddc0d418aa554abf5bf336996@o1091874.ingest.sentry.io/6109502",
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});

interface IGlobalContext {
  accessToken?: String;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [myAcessToken, setMyAccessToken] = useState("");
  const [myuserInfo, setMyUserInfo] = useState({});
  const myvalue = {
    accessToken: myAcessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myuserInfo,
    setUserInfo: setMyUserInfo,
  };
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    // if (accessToken) setMyAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);
  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAcessToken}` },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`, // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
            },
          });
          return forward(operation);
        }
      }
    }
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    <>
      {/* <Head>  // 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b69e916819dbc040afacc37720eebc50"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myvalue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}
export default MyApp;
